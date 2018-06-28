class Queue
{
	constructor()
	{
		this.arr = [];
	}
	enqueue(item)
	{
		this.arr.push(item);
	}
	dequeue()
	{
		return this.arr.shift();
	}
	isEmpty()
	{
		return this.arr.length === 0;
	}
	front()
	{
		if(this.isEmpty())
			throw new Error("Empty Queue");
		return this.arr[0];
	}
	back()
	{
		if(this.isEmpty())
			throw new Error("Empty Queue");
		return this.arr[this.arr.length-1];
	}
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

while(!q.isEmpty())
{
	console.log(q.dequeue());
}
