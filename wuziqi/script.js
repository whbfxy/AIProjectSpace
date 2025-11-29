class Gomoku {
    constructor() {
        this.canvas = document.getElementById('game-board');
        this.ctx = this.canvas.getContext('2d');
        this.boardSize = 15; // 15x15棋盘
        this.cellSize = 40; // 每个格子的大小
        this.padding = 20; // 边距
        this.board = []; // 棋盘数组
        this.currentPlayer = 1; // 1为黑棋，2为白棋
        this.gameOver = false;
        this.moveHistory = []; // 移动历史
        this.winningLine = []; // 获胜的连线
        
        // 游戏模式相关
        this.gameMode = 'pvp'; // 'pvp' 或 'pve'
        this.difficulty = 'medium'; // 'easy', 'medium', 'hard'
        this.isAIThinking = false;
        
        this.init();
    }
    
    init() {
        // 初始化棋盘数组
        this.board = Array(this.boardSize).fill(null).map(() => Array(this.boardSize).fill(0));
        
        // 设置canvas大小
        this.canvas.width = this.cellSize * (this.boardSize - 1) + this.padding * 2;
        this.canvas.height = this.cellSize * (this.boardSize - 1) + this.padding * 2;
        
        // 绑定事件
        this.canvas.addEventListener('click', this.handleClick.bind(this));
        document.getElementById('restart-btn').addEventListener('click', this.restart.bind(this));
        document.getElementById('undo-btn').addEventListener('click', this.undo.bind(this));
        
        // 绑定游戏模式切换事件
        document.getElementById('pvp-mode').addEventListener('click', () => this.setGameMode('pvp'));
        document.getElementById('pve-mode').addEventListener('click', () => this.setGameMode('pve'));
        document.getElementById('difficulty-select').addEventListener('change', (e) => {
            this.difficulty = e.target.value;
        });
        
        // 绘制棋盘
        this.drawBoard();
        this.updateUI();
    }
    
    setGameMode(mode) {
        this.gameMode = mode;
        
        // 更新按钮状态
        document.getElementById('pvp-mode').classList.toggle('active', mode === 'pvp');
        document.getElementById('pve-mode').classList.toggle('active', mode === 'pve');
        
        // 显示/隐藏难度选择
        document.getElementById('difficulty-section').style.display = mode === 'pve' ? 'flex' : 'none';
        
        // 重新开始游戏
        this.restart();
    }
    
    drawBoard() {
        // 清空画布
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 绘制棋盘背景
        this.ctx.fillStyle = '#f4d03f';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 绘制网格线
        this.ctx.strokeStyle = '#8b4513';
        this.ctx.lineWidth = 1;
        
        for (let i = 0; i < this.boardSize; i++) {
            // 横线
            this.ctx.beginPath();
            this.ctx.moveTo(this.padding, this.padding + i * this.cellSize);
            this.ctx.lineTo(this.padding + (this.boardSize - 1) * this.cellSize, this.padding + i * this.cellSize);
            this.ctx.stroke();
            
            // 竖线
            this.ctx.beginPath();
            this.ctx.moveTo(this.padding + i * this.cellSize, this.padding);
            this.ctx.lineTo(this.padding + i * this.cellSize, this.padding + (this.boardSize - 1) * this.cellSize);
            this.ctx.stroke();
        }
        
        // 绘制星位（天元和四个角的星位）
        this.drawStar(7, 7); // 天元
        this.drawStar(3, 3); // 左上
        this.drawStar(11, 3); // 右上
        this.drawStar(3, 11); // 左下
        this.drawStar(11, 11); // 右下
        
        // 重新绘制所有棋子
        this.drawAllPieces();
        
        // 如果有获胜连线，绘制它
        if (this.winningLine.length > 0) {
            this.drawWinningLine();
        }
    }
    
    drawStar(row, col) {
        const x = this.padding + col * this.cellSize;
        const y = this.padding + row * this.cellSize;
        
        this.ctx.fillStyle = '#8b4513';
        this.ctx.beginPath();
        this.ctx.arc(x, y, 3, 0, Math.PI * 2);
        this.ctx.fill();
    }
    
    drawAllPieces() {
        for (let row = 0; row < this.boardSize; row++) {
            for (let col = 0; col < this.boardSize; col++) {
                if (this.board[row][col] !== 0) {
                    this.drawPiece(row, col, this.board[row][col]);
                }
            }
        }
    }
    
    drawPiece(row, col, player) {
        const x = this.padding + col * this.cellSize;
        const y = this.padding + row * this.cellSize;
        const radius = this.cellSize * 0.4;
        
        // 绘制阴影
        this.ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        this.ctx.shadowBlur = 5;
        this.ctx.shadowOffsetX = 2;
        this.ctx.shadowOffsetY = 2;
        
        // 绘制棋子
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        
        if (player === 1) {
            // 黑棋
            const gradient = this.ctx.createRadialGradient(x - radius/3, y - radius/3, 0, x, y, radius);
            gradient.addColorStop(0, '#555');
            gradient.addColorStop(1, '#000');
            this.ctx.fillStyle = gradient;
        } else {
            // 白棋
            const gradient = this.ctx.createRadialGradient(x - radius/3, y - radius/3, 0, x, y, radius);
            gradient.addColorStop(0, '#fff');
            gradient.addColorStop(1, '#ddd');
            this.ctx.fillStyle = gradient;
        }
        
        this.ctx.fill();
        
        // 重置阴影
        this.ctx.shadowColor = 'transparent';
        this.ctx.shadowBlur = 0;
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
        
        // 绘制棋子边框
        this.ctx.strokeStyle = player === 1 ? '#000' : '#999';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
    }
    
    handleClick(event) {
        if (this.gameOver || this.isAIThinking) return;
        
        // 在人机模式下，如果是AI的回合，不允许点击
        if (this.gameMode === 'pve' && this.currentPlayer === 2) return;
        
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        // 转换为棋盘坐标
        const col = Math.round((x - this.padding) / this.cellSize);
        const row = Math.round((y - this.padding) / this.cellSize);
        
        // 检查是否在有效范围内
        if (row < 0 || row >= this.boardSize || col < 0 || col >= this.boardSize) {
            return;
        }
        
        // 检查该位置是否已有棋子
        if (this.board[row][col] !== 0) {
            return;
        }
        
        // 下棋
        this.makeMove(row, col);
    }
    
    makeMove(row, col) {
        // 放置棋子
        this.board[row][col] = this.currentPlayer;
        this.moveHistory.push({ row, col, player: this.currentPlayer });
        
        // 绘制棋子
        this.drawPiece(row, col, this.currentPlayer);
        
        // 检查是否获胜
        if (this.checkWin(row, col)) {
            this.gameOver = true;
            this.showWinner();
            return;
        }
        
        // 检查是否平局
        if (this.moveHistory.length === this.boardSize * this.boardSize) {
            this.gameOver = true;
            this.showDraw();
            return;
        }
        
        // 切换玩家
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        this.updateUI();
        
        // 如果是人机模式且轮到AI，让AI下棋
        if (this.gameMode === 'pve' && this.currentPlayer === 2 && !this.gameOver) {
            this.isAIThinking = true;
            this.updateUI();
            
            setTimeout(() => {
                this.aiMove();
                this.isAIThinking = false;
            }, 500);
        }
    }
    
    aiMove() {
        const move = this.getBestMove();
        if (move) {
            this.makeMove(move.row, move.col);
        }
    }
    
    getBestMove() {
        const emptyPositions = [];
        
        // 获取所有空位置
        for (let row = 0; row < this.boardSize; row++) {
            for (let col = 0; col < this.boardSize; col++) {
                if (this.board[row][col] === 0) {
                    emptyPositions.push({ row, col });
                }
            }
        }
        
        if (emptyPositions.length === 0) return null;
        
        // 根据难度选择不同的策略
        switch (this.difficulty) {
            case 'easy':
                return this.getRandomMove(emptyPositions);
            case 'medium':
                return this.getMediumMove(emptyPositions);
            case 'hard':
                return this.getHardMove(emptyPositions);
            default:
                return this.getMediumMove(emptyPositions);
        }
    }
    
    getRandomMove(emptyPositions) {
        // 简单难度：随机选择
        return emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
    }
    
    getMediumMove(emptyPositions) {
        // 中等难度：优先选择能赢或阻止对手赢的位置
        let bestMove = null;
        let bestScore = -Infinity;
        
        for (const pos of emptyPositions) {
            let score = 0;
            
            // 检查AI是否能赢
            this.board[pos.row][pos.col] = 2;
            if (this.checkWin(pos.row, pos.col)) {
                this.board[pos.row][pos.col] = 0;
                return pos; // 直接获胜
            }
            this.board[pos.row][pos.col] = 0;
            
            // 检查是否需要阻止对手获胜
            this.board[pos.row][pos.col] = 1;
            if (this.checkWin(pos.row, pos.col)) {
                score += 1000; // 阻止对手获胜
            }
            this.board[pos.row][pos.col] = 0;
            
            // 评估位置价值
            score += this.evaluatePosition(pos.row, pos.col, 2);
            score -= this.evaluatePosition(pos.row, pos.col, 1) * 0.8;
            
            // 优先选择中心位置
            const centerDistance = Math.abs(pos.row - 7) + Math.abs(pos.col - 7);
            score += (14 - centerDistance) * 2;
            
            if (score > bestScore) {
                bestScore = score;
                bestMove = pos;
            }
        }
        
        return bestMove;
    }
    
    getHardMove(emptyPositions) {
        // 困难难度：使用更深入的评估
        let bestMove = null;
        let bestScore = -Infinity;
        
        for (const pos of emptyPositions) {
            let score = 0;
            
            // 检查AI是否能赢
            this.board[pos.row][pos.col] = 2;
            if (this.checkWin(pos.row, pos.col)) {
                this.board[pos.row][pos.col] = 0;
                return pos; // 直接获胜
            }
            this.board[pos.row][pos.col] = 0;
            
            // 检查是否需要阻止对手获胜
            this.board[pos.row][pos.col] = 1;
            if (this.checkWin(pos.row, pos.col)) {
                score += 10000; // 阻止对手获胜
            }
            this.board[pos.row][pos.col] = 0;
            
            // 更深入的位置评估
            score += this.evaluatePosition(pos.row, pos.col, 2) * 2;
            score -= this.evaluatePosition(pos.row, pos.col, 1) * 1.5;
            
            // 考虑棋形的发展潜力
            score += this.evaluatePotential(pos.row, pos.col, 2);
            score -= this.evaluatePotential(pos.row, pos.col, 1) * 0.7;
            
            // 优先选择中心位置
            const centerDistance = Math.abs(pos.row - 7) + Math.abs(pos.col - 7);
            score += (14 - centerDistance) * 3;
            
            if (score > bestScore) {
                bestScore = score;
                bestMove = pos;
            }
        }
        
        return bestMove;
    }
    
    evaluatePosition(row, col, player) {
        let score = 0;
        const directions = [
            [[0, 1], [0, -1]],   // 横向
            [[1, 0], [-1, 0]],   // 竖向
            [[1, 1], [-1, -1]],  // 左斜
            [[1, -1], [-1, 1]]   // 右斜
        ];
        
        this.board[row][col] = player;
        
        for (const direction of directions) {
            const line = this.getLine(row, col, direction, player);
            const openEnds = this.countOpenEnds(line, player);
            
            // 根据连子数和开放端数评分
            if (line.length >= 5) {
                score += 100000;
            } else if (line.length === 4) {
                score += openEnds === 2 ? 10000 : 1000;
            } else if (line.length === 3) {
                score += openEnds === 2 ? 1000 : 100;
            } else if (line.length === 2) {
                score += openEnds === 2 ? 100 : 10;
            }
        }
        
        this.board[row][col] = 0;
        return score;
    }
    
    evaluatePotential(row, col, player) {
        let score = 0;
        const directions = [
            [[0, 1], [0, -1]],   // 横向
            [[1, 0], [-1, 0]],   // 竖向
            [[1, 1], [-1, -1]],  // 左斜
            [[1, -1], [-1, 1]]   // 右斜
        ];
        
        for (const direction of directions) {
            const pattern = this.getPattern(row, col, direction, player);
            score += this.evaluatePattern(pattern);
        }
        
        return score;
    }
    
    getPattern(row, col, direction, player) {
        const pattern = [];
        
        // 向两个方向各检查4个位置
        for (let i = -4; i <= 4; i++) {
            const newRow = row + direction[0][0] * i;
            const newCol = col + direction[0][1] * i;
            
            if (this.isValidPosition(newRow, newCol)) {
                pattern.push(this.board[newRow][newCol]);
            } else {
                pattern.push(-1); // 边界
            }
        }
        
        return pattern;
    }
    
    evaluatePattern(pattern) {
        // 简化的模式评估
        let score = 0;
        const center = 4; // 中心位置
        
        // 检查各种有利模式
        for (let i = 0; i <= 4; i++) {
            const subPattern = pattern.slice(i, i + 5);
            if (subPattern.length === 5) {
                const playerCount = subPattern.filter(p => p === 2).length;
                const emptyCount = subPattern.filter(p => p === 0).length;
                
                if (playerCount === 3 && emptyCount === 2) {
                    score += 50;
                } else if (playerCount === 2 && emptyCount === 3) {
                    score += 10;
                }
            }
        }
        
        return score;
    }
    
    countOpenEnds(line, player) {
        let openEnds = 0;
        
        if (line.length > 0) {
            const first = line[0];
            const last = line[line.length - 1];
            
            // 检查第一个位置的前一个位置
            const prevRow = first.row - (line[1] ? line[1].row - first.row : 0);
            const prevCol = first.col - (line[1] ? line[1].col - first.col : 0);
            if (this.isValidPosition(prevRow, prevCol) && this.board[prevRow][prevCol] === 0) {
                openEnds++;
            }
            
            // 检查最后一个位置的后一个位置
            const nextRow = last.row + (line[line.length - 2] ? last.row - line[line.length - 2].row : 0);
            const nextCol = last.col + (line[line.length - 2] ? last.col - line[line.length - 2].col : 0);
            if (this.isValidPosition(nextRow, nextCol) && this.board[nextRow][nextCol] === 0) {
                openEnds++;
            }
        }
        
        return openEnds;
    }
    
    checkWin(row, col) {
        const player = this.board[row][col];
        
        // 检查四个方向：横、竖、左斜、右斜
        const directions = [
            [[0, 1], [0, -1]],   // 横向
            [[1, 0], [-1, 0]],   // 竖向
            [[1, 1], [-1, -1]],  // 左斜
            [[1, -1], [-1, 1]]   // 右斜
        ];
        
        for (const direction of directions) {
            const line = this.getLine(row, col, direction, player);
            if (line.length >= 5) {
                this.winningLine = line;
                return true;
            }
        }
        
        return false;
    }
    
    getLine(row, col, direction, player) {
        const line = [{row, col}];
        
        // 向一个方向检查
        for (let i = 1; i < 5; i++) {
            const newRow = row + direction[0][0] * i;
            const newCol = col + direction[0][1] * i;
            
            if (this.isValidPosition(newRow, newCol) && this.board[newRow][newCol] === player) {
                line.push({row: newRow, col: newCol});
            } else {
                break;
            }
        }
        
        // 向另一个方向检查
        for (let i = 1; i < 5; i++) {
            const newRow = row + direction[1][0] * i;
            const newCol = col + direction[1][1] * i;
            
            if (this.isValidPosition(newRow, newCol) && this.board[newRow][newCol] === player) {
                line.push({row: newRow, col: newCol});
            } else {
                break;
            }
        }
        
        return line;
    }
    
    isValidPosition(row, col) {
        return row >= 0 && row < this.boardSize && col >= 0 && col < this.boardSize;
    }
    
    drawWinningLine() {
        if (this.winningLine.length < 2) return;
        
        this.ctx.strokeStyle = '#ff0000';
        this.ctx.lineWidth = 3;
        this.ctx.setLineDash([5, 5]);
        
        this.ctx.beginPath();
        const start = this.winningLine[0];
        const end = this.winningLine[this.winningLine.length - 1];
        
        const startX = this.padding + start.col * this.cellSize;
        const startY = this.padding + start.row * this.cellSize;
        const endX = this.padding + end.col * this.cellSize;
        const endY = this.padding + end.row * this.cellSize;
        
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
        
        this.ctx.setLineDash([]);
    }
    
    showWinner() {
        const winner = this.currentPlayer === 1 ? '黑棋' : '白棋';
        if (this.gameMode === 'pve' && this.currentPlayer === 2) {
            document.getElementById('game-status').textContent = `机器人获胜！`;
        } else {
            document.getElementById('game-status').textContent = `${winner} 获胜！`;
        }
        document.getElementById('game-status').classList.add('winner');
        this.updateUI();
    }
    
    showDraw() {
        document.getElementById('game-status').textContent = '平局！';
        document.getElementById('game-status').classList.add('winner');
        this.updateUI();
    }
    
    updateUI() {
        let currentPlayerText = this.currentPlayer === 1 ? '黑棋' : '白棋';
        
        // 在人机模式下，显示更友好的文字
        if (this.gameMode === 'pve') {
            if (this.currentPlayer === 1) {
                currentPlayerText = '玩家（黑棋）';
            } else {
                currentPlayerText = '机器人（白棋）';
            }
            
            if (this.isAIThinking) {
                currentPlayerText += ' 思考中...';
            }
        }
        
        document.getElementById('current-player').textContent = currentPlayerText;
        
        // 更新按钮状态
        document.getElementById('undo-btn').disabled = this.moveHistory.length === 0 || this.gameOver || this.isAIThinking;
        
        if (!this.gameOver) {
            document.getElementById('game-status').textContent = '游戏进行中';
            document.getElementById('game-status').classList.remove('winner');
        }
    }
    
    restart() {
        // 重置游戏状态
        this.board = Array(this.boardSize).fill(null).map(() => Array(this.boardSize).fill(0));
        this.currentPlayer = 1;
        this.gameOver = false;
        this.moveHistory = [];
        this.winningLine = [];
        this.isAIThinking = false;
        
        // 重新绘制棋盘
        this.drawBoard();
        this.updateUI();
    }
    
    undo() {
        if (this.moveHistory.length === 0 || this.gameOver || this.isAIThinking) return;
        
        // 在人机模式下，撤销两步（玩家和AI的）
        const stepsToUndo = this.gameMode === 'pve' ? 2 : 1;
        
        for (let i = 0; i < stepsToUndo && this.moveHistory.length > 0; i++) {
            const lastMove = this.moveHistory.pop();
            this.board[lastMove.row][lastMove.col] = 0;
        }
        
        // 重置当前玩家
        this.currentPlayer = 1;
        
        // 重新绘制棋盘
        this.drawBoard();
        this.updateUI();
    }
}

// 页面加载完成后初始化游戏
document.addEventListener('DOMContentLoaded', () => {
    new Gomoku();
});
