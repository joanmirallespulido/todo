const Todo = ({ todo, deleteTodo, updateTodo }) => {
    const { title, id, isActive } = todo;
    return (
        <li className={isActive ? "incomplete" : "complete"}>
            <div>
                <button
                    className={isActive ? "mark mark-complete" : "mark mark-incomplete"}
                    onClick={() => {
                        updateTodo(id);
                    }}
                    title={isActive ? "Mark complete" : "Mark incomplete"}
                >
                    <svg
                        width="13"
                        height="10"
                        viewBox="0 0 13 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.455 0.45498C10.6663 0.253813 10.9475 0.1426 11.2392 0.144808C11.531 0.147015 11.8104 0.262471 12.0187 0.466812C12.2269 0.671152 12.3476 0.948396 12.3553 1.24004C12.363 1.53169 12.2571 1.81492 12.06 2.02998L6.07499 9.51498C5.97208 9.62583 5.84787 9.71478 5.70979 9.77653C5.57171 9.83828 5.4226 9.87155 5.27137 9.87435C5.12014 9.87715 4.9699 9.84942 4.82963 9.79283C4.68936 9.73624 4.56194 9.65194 4.45499 9.54498L0.485992 5.57598C0.375462 5.47299 0.286809 5.34879 0.225321 5.21079C0.163833 5.07279 0.13077 4.92382 0.128105 4.77276C0.12544 4.62171 0.153227 4.47167 0.209808 4.33158C0.26639 4.1915 0.350607 4.06425 0.457435 3.95742C0.564263 3.85059 0.691514 3.76638 0.831596 3.7098C0.971678 3.65321 1.12172 3.62543 1.27278 3.62809C1.42383 3.63076 1.5728 3.66382 1.7108 3.72531C1.8488 3.7868 1.973 3.87545 2.07599 3.98598L5.21699 7.12548L10.4265 0.48798C10.4359 0.476432 10.4459 0.465414 10.4565 0.45498H10.455Z"
                            fill="green"
                        />
                    </svg>
                </button>
                &nbsp;
                {title}&nbsp;
            </div>
            <button
                onClick={() => {
                    deleteTodo(id);
                }}
                className="delete"
                title="Delete todo"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 4H12C12 3.46957 11.7893 2.96086 11.4142 2.58579C11.0391 2.21071 10.5304 2 10 2C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V4ZM6 4C6 2.93913 6.42143 1.92172 7.17157 1.17157C7.92172 0.421427 8.93913 0 10 0C11.0609 0 12.0783 0.421427 12.8284 1.17157C13.5786 1.92172 14 2.93913 14 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5C20 5.26522 19.8946 5.51957 19.7071 5.70711C19.5196 5.89464 19.2652 6 19 6H18.118L17.232 16.34C17.1468 17.3385 16.69 18.2686 15.9519 18.9463C15.2137 19.6241 14.2481 20.0001 13.246 20H6.754C5.75191 20.0001 4.78628 19.6241 4.04815 18.9463C3.31002 18.2686 2.85318 17.3385 2.768 16.34L1.882 6H1C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H6ZM13 10C13 9.73478 12.8946 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V10ZM8 9C8.26522 9 8.51957 9.10536 8.70711 9.29289C8.89464 9.48043 9 9.73478 9 10V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V10C7 9.73478 7.10536 9.48043 7.29289 9.29289C7.48043 9.10536 7.73478 9 8 9V9ZM4.76 16.17C4.8026 16.6694 5.03117 17.1346 5.40044 17.4735C5.76972 17.8124 6.25278 18.0003 6.754 18H13.246C13.7469 17.9998 14.2294 17.8117 14.5983 17.4728C14.9671 17.134 15.1954 16.6691 15.238 16.17L16.11 6H3.89L4.762 16.17H4.76Z"
                        fill="red"
                    />
                </svg>
            </button>
        </li>
    );
};

export default Todo;
