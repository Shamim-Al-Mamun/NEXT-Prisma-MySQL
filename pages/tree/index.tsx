
import TreeMenu from 'react-simple-tree-menu';
import Tree from '@naisutech/react-tree';


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/utils', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  }).then((res) => console.log(res));

  //const data = await res.json()


  //console.log(data)

  // Pass data to the page via props
  return { props: { categoryList: JSON.parse(JSON.stringify(data)) } }
}

const data1 = [
  {
    "id": 1,
    "parentId": null,
    "label": "My parent node 1",
    "items": [
      {
        "id": 5,
        "label": "My file",
        "parentId": 2
      },
      {
        "id": 8,
        "label": "Mamun",
        "parentId": 2
      }
    ]
  },
  {
    "id": 2,
    "parentId": 1,
    "label": "My child node"
  },

  {
    "id": 3,
    "parentId": null,
    "label": "My parent node 2",
    "items": [
      {
        "id": 7,
        "label": "My file",
        "parentId": 2
      }
    ]
  },
  {
    "id": 4,
    "parentId": 2,
    "label": "My child node"
  },
  {
    "id": 10,
    "parentId": 4,
    "label": "Mamun 2"
  }
]


const data = [

  {
    "id": 1,
    "parentId": null,
    "label": "root1",
  },
  {
    "id": 2,
    "parentId": 1,
    "label": "A"
  }, {
    "id": 3,
    "parentId": 1,
    "label": "B",
  },
  {
    "id": 4,
    "parentId": 2,
    "label": "a1"
  },
  {
    "id": 5,
    "parentId": 3,
    "label": "b1"
  },
  {
    "id": 10,
    "parentId": 9,
    "label": "c1"
  },
  {
    "id": 6,
    "parentId": 4,
    "label": "a11"
  },
  {
    "id": 7,
    "parentId": 6,
    "label": "a111"
  },
  {
    "id": 8,
    "parentId": null,
    "label": "root2"
  },
  {
    "id": 9,
    "parentId": 8,
    "label": "C"
  },
]

const myThemes:any = {
  modifiedDarkLarge: {
    text: '#fafafa', // text color
    bg: '#2d3439', // background color of whole tree
    indicator: 'gold', // open folder indicator color
    separator: 'gold', // row seperator color
    icon: 'gold', // fill & stroke color of default icons - has no effect when using custom icons
    selectedBg: '#3f464e', // background of selected element
    selectedText: '#fafafa', // text color of selected element
    hoverBg: '#505a63', // background of hovered element
    hoverText: '#fafafa', // text color of hovered element
    accentBg: '#2d3439', // background of empty folder element
    accentText: '#999', // text color of empty folder element
    textSize: 'large' // preferred text size
  }
}



const TreeList = ({ categoryList }: any) => {

  // console.log(data)
  //let remove = categoryList.splice(0)
  //data.splice(0);

  //console.log(data);
  //const result = Object.entries(categoryList);
  let cateList = categoryList.category?.map((item: any, i: any) => {
    console.log(item);
    // return (
    //   <option key={i} value={item.categoryID}>{item.level}</option>
    // )
  });

  // console.log(categoryList);

  return (
    <div>
      {/*<Tree nodes={categoryList.category} customTheme={myThemes} />*/}
      <Tree nodes={data} customTheme={myThemes} />
    </div>
  )
};

export default TreeList;