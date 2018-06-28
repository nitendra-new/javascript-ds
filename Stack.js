
class Stack
{
	constructor()
	{
		this.arr = [];
	}
	push(item)
	{
		this.arr.push(item);
	}
	pop()
	{
		return this.arr.pop();
	}

	isEmpty()
	{
		return this.arr.length === 0;
	}
	top()
	{
		if(this.arr.length === 0)
			throw new Error("Empty Stack");
		return this.arr[this.arr.length-1];
	}
}

let stack = new Stack();

stack.push(5);

stack.push(4);
stack.push(3);
stack.push(2);

//while(!stack.isEmpty())
{
	console.log(stack.top());
}
