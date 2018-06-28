
class TreeNode
{
	constructor(val)
	{
		this._val = val;
		this.left = null;
		this.right = null;
	}
}

class Tree
{
	constructor()
	{
		this._root = null;
	}

	insertNodeUtil(node,newNode)
	{
		if(newNode._val<node._val)
		{
			if(node.left === null)
			{
				node.left = newNode;
			}
			else
			{
				this.insertNodeUtil(node.left,newNode);
			}
		}
		else
		{
			if(node.right === null)
			{
				node.right = newNode;
			}
			else
			{
				this.insertNodeUtil(node.right,newNode);
			}
		}
	}

	insertNode(val)
	{
		let newNode = new TreeNode(val);
		if(this._root === null)
		{
			this._root = newNode;
		}
		else
		{
			this.insertNodeUtil(this._root,newNode);
		}
		
	}
	traverseInorderUtil(node)
	{
		if(node === null)
			return;

		this.traverseInorderUtil(node.left);
		console.log(node._val);
		this.traverseInorderUtil(node.right);
	}

	traveseInorder()
	{
		//console.log("\n" + this._root);
		this.traverseInorderUtil(this._root);
	}
}



let tree = new Tree();
tree.insertNode(5);
tree.insertNode(6);
tree.insertNode(3);
tree.insertNode(2);
tree.insertNode(7);
tree.traveseInorder();




