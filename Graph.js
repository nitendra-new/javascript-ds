

class Graph
{
	constructor(noOfVertices,isDirected=false)
	{
		this.noOfVertices = noOfVertices;
		this.adjList = new Map();
		this.isDirected = isDirected;
	}

	addVertex(v)
	{
		this.adjList.set(v,[]);
	}
	addEdge(st,ed)
	{
		if(!this.isDirected)
			this.adjList.get(ed).push(st);
		this.adjList.get(st).push(ed);
		
	}
	printGraph()
	{
		let keys = this.adjList.keys();

		for(let key of keys)
		{
			let friends = '';
			let val = this.adjList.get(key);
			for(let j of val)
			{
				//console.log(j);
				friends += j + ' ';
			}

			console.log(key + "-> " + friends);
		}
	}
	bfs(start)
	{
		let q = [];
		let visited = new Set();

		q.push(start)
		while(q.length>0)
		{
			let elem = q.shift();
			if(!visited.has(elem))
			{
				visited.add(elem);
				console.log(elem);
			}
			
			let friends = this.adjList.get(elem);
			for(let i=0;i<friends.length;++i)
			{
				if(!visited.has(friends[i]))
				{
					q.push(friends[i]);
					//visited.add(friends[i]);
				}
			}
		}

	}

	dfs(start)
	{
		let stack = [];
		let visited = new Set();

		stack.push(start)
		while(stack.length>0)
		{
			let elem = stack.pop();
			if(!visited.has(elem))
			{
				visited.add(elem);
				console.log(elem);
			}
			
			let friends = this.adjList.get(elem);
			for(let i=0;i<friends.length;++i)
			{
				if(!visited.has(friends[i]))
				{
					stack.push(friends[i]);
				}
			}
		}

	}
}

// Using the above implemented graph class
var g = new Graph(5,true);
//var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
var vertices = [ 0, 1, 2, 3, 4 ];
 
// adding vertices
for (var i = 0; i < vertices.length; i++) 
{
    g.addVertex(vertices[i]);
}
 
g.addEdge(1, 0);
g.addEdge(0, 2);
g.addEdge(2, 1);
g.addEdge(0, 3);
g.addEdge(3, 4);
// adding edges
/*g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');*/
//g.printGraph();
g.dfs(0);


