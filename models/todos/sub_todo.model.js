import mongnoose from 'mongoose';

const subTodoSchema = new mongoose.Schema({}, { required: true });

export const subTodo = mongoose.model('subTodo', subTodoSchema);
