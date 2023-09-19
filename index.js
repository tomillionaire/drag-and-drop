const sortableList = document.querySelectorAll(".sortable-list");
const items = sortableList.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        // adding dragging class to item after a delay
       setTimeout(() =>  item.classList.add("dragging"), 0);
    });
    // removing dragging class from item on dragend event
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = sortableList.querySelector(".dragging");
    // getting all items except currently ragging and making array of them
    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    // ifnding the sibling after which the dragging item should be placed
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    // inserting the dragging item before the found sibling
    sortableList.insertBefore(draggingItem, nextSibling);
    
}
sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());