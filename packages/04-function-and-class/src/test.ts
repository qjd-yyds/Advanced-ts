type TreeData = {
	child: boolean;
	folder_name: string;
	folder_path: string;
	id: string;
	parent_id: string;
	remarks: string;
	readonly $treeNodeId?: number;
};
type Tree = {
	checked: boolean;
	data?: TreeData;
	childrenNodes?: Tree[];
};
const data: Tree = {
	checked: false,
	childrenNodes: [
		{
			checked: false,
			childrenNodes: [
				{
					checked: false,
					data: {
						child: true,
						folder_name: 'name4',
						folder_path: 'path4',
						id: 'id4',
						parent_id: 'parent_id4',
						remarks: 'remarks'
					}
				}
			]
		},
		{
			checked: false,
			data: {
				child: true,
				folder_name: 'name3',
				folder_path: 'path3',
				id: 'id3',
				parent_id: 'parent_id3',
				remarks: 'remarks'
			}
		}
	]
};
function getData(tree: Tree) {
	const res: TreeData[] = [];
	const dps = (node: Tree) => {
		if (!node) return;
		if (node.data) {
			res.push(node.data);
		} else {
			if (Array.isArray(node.childrenNodes)) {
				node.childrenNodes.forEach(dps);
			}
		}
	};
	dps(tree);
	return res;
}
const res = getData(data)
console.log(res);
