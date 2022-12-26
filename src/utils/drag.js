// target 為 button
const recoverParent = (target) => {
  // dragStart 後 所有樣式恢復原狀
  // 外框
  target.parentElement.classList.remove('border-0', 'border-select-error');
  target.parentElement.classList.add('border', 'border-dashed');
  // button
  target.classList.remove('bg-white', 'active', 'bg-primary');
  if (target.classList.contains('scrum-drag')) {
    target.classList.add('border', 'border-primary');
  }
};

// target => div dragSource=>button
const changePosition = (target, dragSource, dragTarget, setDragTarget) => {
  // 移到正確位置
  if (dragSource.dataset.order === target.dataset.order) {
    if (dragSource.classList.contains('scrum-drag')) {
      dragSource.classList.add('bg-primary');
    }
    dragSource.classList.add('active');
    target.classList.remove('border', 'border-dashed');
    target.classList.add('border-0');

    // 將正確的button添加到 dragTarget ==> 用來判斷是否完成
    if (dragTarget.findIndex((id) => id === dragSource.dataset.order) === -1) {
      setDragTarget([...dragTarget, dragSource.dataset.order]);
    }
  }
  // 移到錯誤位置
  else {
    target.classList.remove('border-dashed');
    target.classList.add('border-select-error');
    if (dragSource.classList.contains('scrum-drag')) {
      dragSource.classList.add('bg-white');
      dragSource.classList.remove('border', 'border-primary');
    }
    if (dragTarget.findIndex((id) => id === dragSource.dataset.order) !== -1) {
      setDragTarget(dragTarget.filter((id) => id !== dragSource.dataset.order));
    }
  }
};
export const dragstart_handler = (e, setDragSource, ) => {
  // DataTransfer.effectAllowed 属性指定为拖动源设置所需的拖动效果，应该在dragstart事件中设置此属性
  e.dataTransfer.effectAllowed = 'move';
  // 將目前移動的 button 存在 dragSource
  setDragSource(e.target);
  recoverParent(e.target);
};

export const dragend_handler = (e, dragTargetList, setDragTarget) => {
  // 如果目前已經在正確位置時，button(e.target)、div 的狀態
  if(e.target.parentElement.classList.contains("blank")) {
    changePosition(e.target.parentElement, e.target, dragTargetList, setDragTarget);
  }
};

export const dragover_handler = (e) => {
  // 瀏覽器預設是不能在拖曳後進行放置，所以必須取消預設行為
  e.preventDefault();
  // DataTransfer.dropEffect 属性控制在拖放操作中给用户的反馈
  // 最后一次 dragenter 或 dragover 事件后 dropEffect 的值即為 drop 和 dragend 事件，dropEffect 会被设置为想要得到的值
  // dropEffect 是“move”，那么被拖拽的数据会从源中移除。
  e.dataTransfer.dropEffect = 'move';
};

// dragSource 為被移動的 button
export const drop_handler = (e, dragSource, dragTarget, setDragTarget) => {
  // 瀏覽器預設是不能在拖曳後進行放置，所以必須取消預設行為
  e.preventDefault();
  // target 為外框
  const target = e.target;
  target.appendChild(dragSource);
  changePosition(target, dragSource, dragTarget, setDragTarget);
};

/*
button
原樣式移除 .bg-white .active .bg-primary (scrum-drag)有 border border-primary
1. 移動到對的位置者 .active
  1.1 有 .scrum-drag 須加上 .bg-primary
2. 移到錯誤位址者
  2.1 有 .scrum-drag 須加上 'bg-white'
  2.2 移除 border border-primary
3. 從正確位置移到錯誤位置的 button 須恢復原狀
  3.1 原在正確位置的會有 .active
  3.2 移除 .active

放置處 div
原樣式有 .border-dashed .border 無.border-select-error border-0
1. 當 button 放在正確位置(drop)時
  1.1 div 需移除 .border-dashed .border
  1.2 加上 .border-0
2. 當 button 放在錯誤位置(drop)時
  2.1 div 需移除 .border-dashed
  2.2  div 需加上 .border-select-error
3. 從正確位置移走到錯誤位置時 須恢復原狀
  3.1 div 加回 .border-dashed .border

*/
