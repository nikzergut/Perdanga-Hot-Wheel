import { useEffect, useRef, useState } from "react"
import Button from '../../../components/Button/Button'
import styles from './WheelTest.module.css'
// let spinTime = 0
let angle = 0
let spinTimeout 

function drawWheel(ctx, gameCounter, radius, centerX, centerY, list) {    
    if (gameCounter === 0) {
        return
    }
    else if(gameCounter === 1) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(0, 70%, 50%)`;
        ctx.fill();
        ctx.closePath();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        // ctx.fillStyle = getTextColor(); 
        ctx.font= `${Math.min(36, radius / 5)}px Nunito`;
        ctx.fillStyle = "black";             
        ctx.fillText(list[0], centerX, centerY);                   
    }
    else if (gameCounter === 2) {
        // const halfArc = Math.PI;
        for (let i = 0; i < 2; i++) {
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, i * Math.PI, (i + 1) * Math.PI);
            ctx.closePath();
            ctx.fillStyle = `hsl(${(i * 360 / 2)}, 70%, 50%)`;
            ctx.fill();
            const textAngle = i * Math.PI + Math.PI / 2;
            const textX = centerX + Math.cos(textAngle) * (radius / 2);
            const textY = centerY + Math.sin(textAngle) * (radius / 2);
            // drawCenteredText(ctx, list[i], textX, textY, textAngle, radius / 2);
            testDrawText(ctx, list[i], textX, textY, textAngle, radius / 2)
        }
    }
    else {
        const arc = Math.PI * 2 / gameCounter;
        const points = [];
        for (let i = 0; i < gameCounter; i++) {
            const x = centerX + radius * Math.cos(i * arc);
            const y = centerY + radius * Math.sin(i * arc);
            points.push({ x, y });
        }
        for (let i = 0; i < gameCounter; i++) {
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(points[i].x, points[i].y);
            ctx.lineTo(points[(i + 1) % gameCounter].x, points[(i + 1) % gameCounter].y);
            ctx.closePath();
            ctx.fillStyle = `hsl(${(i * 360 / gameCounter)}, 60%, 54%)`;
            ctx.fill();
            const textAngle = i * arc + arc / 2;
            const textX = centerX + Math.cos(textAngle) * (radius * 0.65);
            const textY = centerY + Math.sin(textAngle) * (radius * 0.65);
            // drawCenteredText(ctx, list[i], textX, textY, textAngle, radius * 0.5);
            testDrawText(ctx, list[i], textX, textY, textAngle, radius * 0.5)
          }
    }
}


function testDrawText(ctx, text, x, y) {
    ctx.save();
    ctx.translate(x, y);
    // ctx.rotate(-angle);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font= `36px Nunito`;
    ctx.fillStyle = "black"; 
    ctx.fillText(text, 0, 0);
    ctx.restore();    
}

function drawRotatedWheel(contex, canvasik, listOfGames, centerY, centerX, radius, gameCounter) {
    contex.save();
    contex.clearRect(0, 0, canvasik.width, canvasik.height);
    contex.translate(canvasik.width / 2, canvasik.height / 2);
    contex.rotate(angle);
    contex.translate(-canvasik.width / 2, -canvasik.height / 2);
    drawWheel(contex, gameCounter, radius, centerX, centerY, listOfGames)    
    contex.restore();
}

function spinWheel(spinTimeTotal, ctx, canvas, list, centerY, centerX, radius, gameCounter, spinTimeFc) {    
    spinTimeFc((prev) => {
        let newSpinTime = prev + 30
        console.log('SPIN TIME IS ', newSpinTime)
        if (newSpinTime >= spinTimeTotal) {
            // stopSpin();
            clearTimeout(spinTimeout)
            console.log('STOP SPIN')
            return prev;
        }
        const progress = newSpinTime / spinTimeTotal;
        console.log("PROGRESS IS "+ progress)
        const easing = t => 1 - Math.pow(1 - t, 3);
        const spinAngle = Math.min(360, (spinTimeTotal - newSpinTime) / spinTimeTotal * 30);
        angle += easing(progress) * spinAngle * Math.PI / 180;
        drawRotatedWheel(ctx, canvas, list,centerY, centerX, radius, gameCounter);
        //   progressBar.style.width = (progress * 100) + "%"; Progress
        //   const remainingTime = Math.max(0, (spinTimeTotal - spinTime) / 1000).toFixed(1);
        //   document.getElementById('timer').textContent = `⏳ ${remainingTime}s`; ProgressBar
        spinTimeout = setTimeout(() => {
            spinTimeFc((prev) => {
                if (prev < spinTimeTotal) {
                    spinWheel(spinTimeTotal, ctx, canvas, list,centerY, centerX, radius, gameCounter, spinTimeFc)
                }
                return prev
            })
        }, 30);   
        return newSpinTime     
    })
}

function getRandomAngle() {    
    // const valueFromInput = 1    
    const randomSpin = Math.floor(Math.random() * 360) + 1080;
    angle = randomSpin * Math.PI / 180;
    
    
    return angle
}


function WheelTest() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const animationRef = useRef(null);
    const startTimeRef = useRef(0);
    const isSpinningRef = useRef(false);
    
    const [gameCounter, setGameCounter] = useState(5);
    const [gameList, setGameList] = useState(['bbb','2fdgs','3jhgf','465354','5sh']);
    const [isSpinning, setIsSpinning] = useState(false);
    
    const [centerY, setCenterY] = useState();
    const [centerX, setCenterX] = useState();
    const [radius, setRadius] = useState();
    
    // Инициализация канваса
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx;
        
        const centerXo = canvas.width / 2;
        const centerYo = canvas.height / 2;
        const radiuso = Math.min(centerXo, centerYo) - 30;
        
        setCenterX(centerXo);
        setCenterY(centerYo);
        setRadius(radiuso);
    }, []);
    
    // Отрисовка колеса при изменении параметров
    useEffect(() => {
        if (ctxRef.current && centerX && centerY && radius) {
            drawWheel(ctxRef.current, gameCounter, radius, centerX, centerY, gameList);
        }
    }, [gameCounter, gameList, centerX, centerY, radius]);
    
    // Очистка анимации при размонтировании
    useEffect(() => {
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);
    
    // Функция анимации с использованием requestAnimationFrame
    const animate = (timestamp) => {
        if (!startTimeRef.current) {
            startTimeRef.current = timestamp;
        }
        
        const elapsed = timestamp - startTimeRef.current;
        const totalDuration = 6000; // Общая длительность анимации в мс
        
        // Если анимация завершена
        if (elapsed >= totalDuration) {
            console.log('ANIMATION COMPLETE');
            isSpinningRef.current = false;
            setIsSpinning(false);
            return;
        }
        
        // Расчет прогресса и угла поворота
        const progress = elapsed / totalDuration;
        const easing = t => 1 - Math.pow(1 - t, 3);
        const spinAngle = Math.min(360, (totalDuration - elapsed) / totalDuration * 30);
        
        angle += easing(progress) * spinAngle * Math.PI / 180;
        
        // Отрисовка колеса
        if (ctxRef.current && canvasRef.current) {
            drawRotatedWheel(
                ctxRef.current,
                canvasRef.current,
                gameList,
                centerY,
                centerX,
                radius,
                gameCounter
            );
        }
        
        // Продолжение анимации
        if (isSpinningRef.current) {
            animationRef.current = requestAnimationFrame(animate);
        }
    };
    
    // Функция запуска вращения
    const startSpin = () => {
        if (isSpinningRef.current) return;
        
        isSpinningRef.current = true;
        setIsSpinning(true);
        startTimeRef.current = 0;
        
        // Запуск анимации
        animationRef.current = requestAnimationFrame(animate);
    };
    
    return (
        <div className={styles.wheelContainer}>
            <canvas ref={canvasRef} width={600} height={600}></canvas>
            <Button 
                onClick={startSpin}
                disabled={isSpinning}
            >
                Крутить
            </Button>
        </div>
    )    
}
export default WheelTest