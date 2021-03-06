import TodoItem from './TodoItem';
import Filter from './Filter';
const Container = ({
	filteredItems,
	setFilteredItems,
	deleteHandler,
	completeHandler,
	filter,
	setFilter,
	filterHandler,
	editHandler,
}) => {
	return (
		<div className='itemsContainer mt-5 d-flex justify-content-center'>
			<div className='card'>
				<div className='card-body'>
					<Filter filterHandler={filterHandler} filter={filter} setFilter={setFilter} />
					{filteredItems.map((filteredItems, index) => {
						return (
							<TodoItem
								key={index}
								item={filteredItems}
								deleteHandler={deleteHandler}
								completeHandler={completeHandler}
								index={index}
								editHandler={editHandler}
							/>
						);
					})}
					<p className='text-center mb-0'>{filteredItems.length} Items</p>
				</div>
			</div>
		</div>
	);
};

export default Container;
