/**
 * Renders the pagination component based on the current page, total list, and items per page.
 *
 * @param {number} currentPage - The current page number
 * @param {function} setCurrentPage - The function to set the current page
 * @param {number} totalList - The total number of items in the list
 * @param {number} listPerPage - The number of items per page
 * @return {JSX.Element} The pagination component
 */
const PaginationNav = ({
	currentPage,
	setCurrentPage,
	totalList,
	listPerPage,
}) => {
	const pages = [];

	for (let i = 1; i <= Math.ceil(totalList / listPerPage); i++) {
		pages.push(i);
	}

	const handleNex = () => {
		if (currentPage === pages[pages.length - 1]) {
			setCurrentPage(pages.length);
			return;
		}

		setCurrentPage((prev) => prev + 1);
	};

	const handlePrev = () => {
		if (currentPage <= 1) {
			setCurrentPage(1);
			return;
		}

		setCurrentPage((prev) => prev - 1);
	};

	return pages.length > 1 ? (
		<div className='pagination'>
			<div className='text-sm'>
				Showing <strong>{currentPage * listPerPage - (listPerPage - 1)}</strong>{' '}
				- <strong>{currentPage * listPerPage}</strong> of{' '}
				<strong>{totalList}</strong>
			</div>

			<div className='wrap'>
				<button
					type='button'
					className='py-2 px-4 mr-2 hover:bg-gray hover:rounded-md focus:border-gray_dark focus:ring-gray_dark focus:bg-gray focus:rounded-md'
					onClick={handlePrev}
					disabled={currentPage === pages[0]}
				>
					Prev
				</button>
				{pages.map((num, index) => (
					<button
						type='button'
						key={num}
						className={currentPage === num ? 'active' : ''}
						onClick={() => setCurrentPage(num)}
					>
						{num}
					</button>
				))}
				<button
					type='button'
					className='py-2 px-4 ml-2 hover:bg-gray hover:rounded-md focus:border-gray_dark focus:ring-gray_dark focus:bg-gray focus:rounded-md'
					onClick={handleNex}
					disabled={currentPage === pages[pages.length - 1]}
				>
					Next
				</button>
			</div>
		</div>
	) : null;
};

export default PaginationNav;
