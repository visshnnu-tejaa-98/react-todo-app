const Form = ({ getInput, input, setInput, addItem, setAddItem, addItemHandler }) => {
	return (
		<div className='form d-flex justify-content-center'>
			<div className='card'>
				<div className='card-body'>
					<form onSubmit={addItemHandler}>
						<div className='row '>
							<div className='col-10'>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										id='inputTodo'
										placeholder='Add Item '
										value={input}
										onChange={getInput}
									/>
								</div>
							</div>
							<div className='col-2 d-flex justify-content-center'>
								<button type='submit' className='btn btn-primary addBtn'>
									Add
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
