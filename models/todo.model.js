export default function ToDo(task){
    const time = new Date().valueOf()
    this.task = task
    this.created_at = time
    this.id = time
    this.is_completed = false
    this.is_deleted = false
}