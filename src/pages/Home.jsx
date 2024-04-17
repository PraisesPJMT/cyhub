import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import News from './mock.js';
import News from './mock.json';
import { FaClock } from 'react-icons/fa6';
import {
	generateRandomNumbers,
	formatDateTimeForNigeria,
} from '../utilities/helpers.js';
import PaginationNav from '../components/Pagination.jsx';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const apiKey = '86868e6a4a3c4709a194e31ec00fac46';

/**
 * Renders the Home component with news articles, featured content, and pagination.
 *
 * @return {JSX.Element} The JSX element representing the Home component.
 */
const Home = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [searchQuery, setSearchQuery] = useState('cyber hack');

	const fromDate = new Date().toISOString().slice(0, 10); // Today's date
	const toDate = new Date(fromDate).setDate(new Date().getDate() - 30); // 30 days before today

	const LIST_PER_PAGE = 10;
	const [featured, setFeatured] = useState([7, 17, 21, 27, 31]);

	const [currentPage, setCurrentPage] = useState(1);
	const [listPerPage] = useState(LIST_PER_PAGE);
	const indexOfLastList = currentPage * listPerPage;
	const indexOfFirstList = indexOfLastList - listPerPage;

	const currentList = articles?.slice(indexOfFirstList, indexOfLastList);

	const dressData = (apiData) => {
		const sorted = apiData
			.sort((a, b) => {
				// Parse the publishedAt strings into Date objects
				const dateA = new Date(a.publishedAt);
				const dateB = new Date(b.publishedAt);

				// Compare the dates
				return dateB - dateA;
			})
			.filter((item) => item.author !== null);
		return sorted;
	};

	useEffect(() => {
		const fetchData = async () => {
			setArticles(dressData(News));
			setIsLoading(true);
			setErrorMessage('');

			try {
				const response = await fetch(
					`https://newsapi.org/v2/everything?q=${searchQuery}&language=en&sortBy=popularity&apiKey=${apiKey}&from=${toDate}&to=${fromDate}`
				);

				if (!response.ok) {
					throw new Error('Something went wrong');
				}

				const data = await response.json();

				const sorted = dressData(data.articles);

				setArticles(sorted);
			} catch (error) {
				setErrorMessage(error.message);
				console.log('Error: ', error);
			} finally {
				setIsLoading(false);
			}
		};

		if (searchQuery) {
			fetchData();
		}
	}, [searchQuery]);

	useEffect(() => {
		setFeatured(generateRandomNumbers(articles.length));
	}, [articles]);

	return (
		<>
			<Header />
			<main className='news'>
				<section className='news-section'>
					{currentList.map((news) => (
						<section className='article' key={uuidv4()}>
							<a href={news?.url} target='_blank'>
								<div className='article-image'>
									<img src={news?.urlToImage} alt={news?.title} />
								</div>
								<div className='article-content'>
									<h3>{news?.title}</h3>
									<p className='meta'>
										<span className='author'>
											By
											<strong>{news?.author.slice(0, 20)}</strong>
										</span>

										<span className='date'>
											<FaClock />
											{formatDateTimeForNigeria(news?.publishedAt)}
										</span>
									</p>
									<p className='article-description'>{news?.description}</p>
								</div>
							</a>
						</section>
					))}

					<PaginationNav
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalList={articles?.length}
						listPerPage={LIST_PER_PAGE}
					/>
				</section>
				<aside>
					<h3>FEATURED</h3>
					<div className='featured'>
						<div className='featured-image'>
							<img src={articles[3]?.urlToImage} alt={articles[3]?.title} />
						</div>
						<div className='featured-content'>
							<h4>{articles[3]?.title}</h4>
							<p className='meta'>
								by
								<strong>{articles[3]?.author}</strong>
								<FaClock />
								<span>
									{formatDateTimeForNigeria(articles[3]?.publishedAt)}
								</span>
							</p>
							<p className='article-description'>{articles[3]?.description}</p>
							<a href={articles[3]?.url} target='_blank'>
								Read More
							</a>
						</div>
					</div>

					{featured.map((feature) => (
						<a
							href={articles[feature]?.url}
							key={uuidv4()}
							target='_blank'
							className='other'
						>
							<div className='other-image'>
								<img
									src={articles[feature]?.urlToImage}
									alt={articles[feature]?.title}
								/>
							</div>
							<div className='other-content'>
								<h4>{articles[feature]?.title}</h4>
								<p className='meta'>
									<FaClock />
									<span>
										{formatDateTimeForNigeria(articles[feature]?.publishedAt)}
									</span>
								</p>
							</div>
						</a>
					))}

					<h3>CONTRIBUTE</h3>

					<div className='contribute'>
						<p>Send us a cyber security tip</p>
						<Link to='/tips'>Send Tip</Link>
					</div>

					<div className='contribute'>
						<p>Contact us an drug related issues</p>
						<Link to='/tips'>contact us</Link>
					</div>
				</aside>
			</main>
			<Footer />
		</>
	);
};

export default Home;
