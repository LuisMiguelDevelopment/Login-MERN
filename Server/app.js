import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import taskRouter from './routes/task.routes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin :"http://localhost:5173",
    credentials : true
}  
));
app.use(cookieParser());
app.use("/api",authRoutes);
app.use("/api",taskRouter);

export default app;