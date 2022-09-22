import { FaEdit, FaTrash } from 'react-icons/fa';
const ItemList = ({ items, removeItem, editItem }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button type='button' className='edit-btn' onClick={() => editItem(id)}>
                <FaEdit />
              </button>
              <button type='button' className='delete-btn' onClick={(e) => removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ItemList;
