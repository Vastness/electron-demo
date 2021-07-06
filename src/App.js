import './App.css';
import TodoList from './pages/todoList';
import { useState } from 'react';

function App() {
  const [nextPageLoading, setNextPageLoading] = useState(false);
  const [list, setList] = useState([]);
  const loadNextPage = () => {
    setNextPageLoading(true);
    const newList = [];
    for(let i = 0; i < 10; i++) {
      newList.push({
        img: 'https://lh3.googleusercontent.com/4qMLK0myoDg8Hrtk0Gfa637gSv7LPtnpBDxe9Pe0gI4ombCis5kcgQ9JkRrSOPvGrDUMyB0=s85',
        text: "在树林旁边，有一条小河，河里有许多小鱼在水里游来游去。一天早晨，猫妈妈带着猫弟弟到河边去钓鱼。他们刚坐下，一只蜻蜓飞来了。蜻蜓真好玩，飞来飞去像架小飞机。猫弟弟看了真喜欢，放下钓鱼竿，就去捉蜻蜓。蜻蜓飞走了，猫弟弟没捉着，空着手回到河边。一看，猫妈妈钓了一条大鱼。猫弟弟又坐在河边钓鱼，一只蝴蝶飞来了。蝴蝶真美丽，猫弟弟看了真喜欢，放下钓鱼竿，又去捉蝴蝶。蝴蝶飞走了，猫弟弟又没捉着，空着手回到河边。一看，猫妈妈又钓了一条大鱼。猫弟弟说：“真气人，我怎么一条小鱼也钓不着？”    猫妈妈看了看猫弟弟，说：“钓鱼就要一心一意，不要三心二意。你一会儿捉蜻蜓，一会儿捉蝴蝶，怎么能钓着鱼呢？”猫弟弟听了猫妈妈的话，很难为情，从此就一心一意地钓鱼了。    蜻 蜓又飞来了，蝴蝶也飞来了，猫弟弟就像没看见一样，一步也不走开。不一会儿，钓竿上的线往下沉，钓竿也动起来了，猫弟弟使劲把钓竿往上一甩，“哎哟”一条 大鱼钓上来啦。鱼摔在地上，噼噼啪啪地乱蹦乱跳，小猫赶紧捉住这条大鱼，高兴地喊了起来：“我钓到大鱼啦，我钓到大鱼啦！”猫妈妈和猫弟弟一起抬着大鱼回 家了。"
      })
    };
    
    setList([
      ...list,
      ...newList
    ])
    setNextPageLoading(false);
  }

  return (
    <div className="App">
      <TodoList 
        list={list}
        hasNextPage={list.length < 10000}
        isNextPageLoading={nextPageLoading}
        loadNextPage={loadNextPage}
      />
    </div>
  );
}

export default App;
