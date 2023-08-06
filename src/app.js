import { format, compareAsc } from 'date-fns' 

const today = new Date()
const formatDate = format(today, 'MMMM yyyy')

console.log(today)
console.log(formatDate)