class Paddle {
    constructor(x, y, w, h, side, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.side = side;
        this.c = c;
        this.vy = 0;
        this.vx = 0;
    }

    draw(ctx) {
        ctx.fillStyle = this.c;
        ctx.strokeStyle = "black"; // Fixed typo from 'strokeStle' to 'strokeStyle'
        ctx.lineWidth = 2;

        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }

    move(isCPU, ball, side) {
        const paddleVelocity = 6; // Increased velocity for faster movement
        const aiVelocityFactor = 0.7; // Increased factor to make AI faster

        if (isCPU) {
            let targetVelocityX = 0;
            let targetVelocityY = 0;

            if (side === SIDE.BOTTOM || side === SIDE.TOP) {
                    targetVelocityX = this.x < ball.x ? paddleVelocity * aiVelocityFactor : -paddleVelocity * aiVelocityFactor;
                // Smoothly update the horizontal velocity
                this.vx = this.vx * 0.9 + targetVelocityX * 0.1;
            } else {
                    targetVelocityY = this.y < ball.y ? paddleVelocity * aiVelocityFactor : -paddleVelocity * aiVelocityFactor;
                // Smoothly update the vertical velocity
                this.vy = this.vy * 0.9 + targetVelocityY * 0.1;
            }
        }

        // Update position based on velocities
        this.y += this.vy;
        this.x += this.vx;

        // Boundary checks
        if (this.y < 0) this.y = 0;
        if (this.y + this.h > boardHeight) this.y = boardHeight - this.h;
        if (this.x < 0) this.x = 0;
        if (this.x + this.w > boardWidth) this.x = boardWidth - this.w;
    }
}