import Head from 'next/head';
// import Tree from 'react-animated-tree';
import TreeView from 'react-treeview';

import "react-treeview/react-treeview.css";

// import ReactDOM from 'react-dom';

import { prisma } from '../api/db';

// import TreeView from 'devextreme-react/tree-view';


// import TreeView from '@mui/lab/TreeView';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import TreeItem from '@mui/lab/TreeItem';




//Plain array to tree view json data example 1:
// function list_to_tree(list:any) {
//     var map:any = {}, node, roots = [], i;

//     for (i = 0; i < list.length; i += 1) {
//       map[list[i].id] = i; // initialize the map
//       list[i].children = []; // initialize the children
//     }

//     for (i = 0; i < list.length; i += 1) {
//       node = list[i];
//       if (node.parentId !== "0") {
//         // if you have dangling branches check that map[node.parentId] exists
//         list[map[node.parentId]].children.push(node);
//       } else {
//         roots.push(node);
//       }
//     }
//     return roots;
//   }



//Plain array to tree view json data example 2:
function makeTree(nodes: any, parentId: any) {
  return nodes
    .filter((node: any) => node.parent_id === parentId)
    .reduce(
      (tree: any, node: any) => [
        ...tree,
        {
          ...node,
          children: makeTree(nodes, node.id),
        },
      ],
      [],
    )
}

interface RenderTree {
  id: string;
  name: string;
  children?: readonly RenderTree[];
}
const data: RenderTree = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
      ],
    },
  ],
};

const treeStyles = {
  position: 'absolute',
  top: 100,
  left: 100,
  color: 'black',
  fill: 'black',
  width: '100%'
}

const typeStyles = {
  fontSize: '2em',
  verticalAlign: 'middle'
}

let DivHead = (props: any) => {
  return (
    <h2>{props.msg}</h2>
  )
}

let ViewTree = () => {
  // const renderTree = (nodes: RenderTree) => (
  //   <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
  //     {Array.isArray(nodes.children)
  //       ? nodes.children.map((node) => renderTree(node))
  //       : null}
  //   </TreeItem>
  // );
  // return (
  //   <TreeView
  //     aria-label="rich object"
  //     defaultCollapseIcon={<ExpandMoreIcon />}
  //     defaultExpanded={['root']}
  //     defaultExpandIcon={<ChevronRightIcon />}
  //     sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
  //   >
  //     {renderTree(data)}
  //   </TreeView>
  // );
}

let View1 = () => {


  return (
    <Tree content="main" type="ITEM" canHide open style={treeStyles}>
      <Tree content="hello" type={<span style={typeStyles}>🙀</span>} canHide />
      <Tree content="B">
        <Tree content="child 1" style={{ color: '#63b1de' }} />
        <Tree content="child 2" style={{ color: '#63b1de' }} />
        <Tree content="child 3" style={{ color: '#63b1de' }} />
      </Tree>
      <Tree content="C">
        <Tree content="child 1" style={{ color: '#63b1de' }} />
      </Tree>
    </Tree>
  );
}
let View = () => {

  var entries = [{
    "id": "12",
    "name": "0",
    "text": "Man",
  },
  {
    "id": "6",
    "name": "12",
    "text": "Boy",
  },
  {
    "id": "7",
    "name": "12",
    "text": "Other",
  },
  {
    "id": "9",
    "name": "0",
    "text": "Woman",
  },
  {
    "id": "11",
    "name": "9",
    "text": "Girl",
  }
];


  function list_to_tree(list) {
    var map = {}, node, roots = [], i;
    
    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }
    
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.name !== "0") {
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node.name]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
  var arr = list_to_tree(entries)
  //console.log(arr);

  function toMap(arr) {
    const result = arr.reduce((acc, current) => {
      acc[current.id] = current
      return acc
    }, {})
    return result
  }

  function formatListToTree(arr) {
    const map = toMap(arr)
    return arr.reduce((acc, current) => {
      const { id, parentid } = current
      if (map[parentid]) {
        map[parentid].children = map[parentid].children || []
        map[parentid].children.push(current)
      } else {
        acc.push(current)
      }
  
      return acc
    }, [])
  }

  function convert(list) {
    const res = []
    const map = list.reduce((res, v) => (res[v.id] = v, res), {})
    for (const item of list) {
        if (item.parentid === 0) {
            res.push(item)
            continue
        }
        if (item.parentid in map) {
            const parent = map[item.parentid]
            parent.children = parent.children || []
            parent.children.push(item)
        }
    }
    return res
}
const list =[
  {id: 1, label: 'department a', parentid: 0},
  {id: 2, label: 'department B', parentid: 0},
  {id: 3, label: 'department C', parentid: 1},
  {id: 4, label: 'department d', parentid: 1},
  {id: 5, label: 'department e', parentid: 2},
  {id: 6, label: 'department f', parentid: 3},
  {id: 7, label: 'department G', parentid: 2},
  {id: 8, label: 'department H', parentid: 4}
];


const result = formatListToTree(list);
console.log(result)



  // const nest = (items, id = 0, link = 'parent_id') =>
  // items
  //   .filter(item => item[link] === id)
  //   .map(item => ({ ...item, children: nest(items, item.id) }));



  // const renderTree = (nodes: RenderTree) => (
  //   <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
  //     {Array.isArray(nodes.children)
  //       ? nodes.children.map((node) => renderTree(node))
  //       : null}
  //   </TreeItem>
  // );
  // return (
  //   <TreeView
  //     aria-label="rich object"
  //     defaultCollapseIcon={<ExpandMoreIcon />}
  //     defaultExpanded={['root']}
  //     defaultExpandIcon={<ChevronRightIcon />}
  //     sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
  //   >
  //     {renderTree(arr)}
  //   </TreeView>
  // );
}


const TreeViewC = () => {
  return (
    <div>
      <Head>
        <title>Tree View Form</title>
      </Head>
      <DivHead msg="Tree View Category" />
      <br></br>
      <div>
        <View />
        {/* <ViewTree /> */}
      </div>
    </div>
  );
};

export default TreeViewC;