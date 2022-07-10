export const CompleteTodos = (props) => {
  const { completeTodos, onClickReturn } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo}>
              <li className="list-row">{todo}</li>
              <button
                onClick={() => {
                  onClickReturn(index);
                }}
              >
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
