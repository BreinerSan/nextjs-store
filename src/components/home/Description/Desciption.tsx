import styles from './Description.module.sass';
import Image from 'next/image';

export const Description = () => {
	return (
		<section className={styles.Description}>
			<Image 
				src="/images/description.jpeg" 
				alt="products marquetplace" 
				width={500} 
				height={300}
				priority={false}
				/>
			<div className={styles.Description__text}>
				<h2>Description</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus! Doloremque, doloremque
					doloremque, voluptatibus, quisquam, doloremque dolores, voluptas, quos, quis, doloribus, consequatur
					voluptatem, quisquam, voluptatibus, doloremque, voluptas, quos, quis, doloribus, consequatur voluptatem,
					quisquam, voluptatibus, doloremque, voluptas, quos, quis, doloribus, consequatur voluptatem, quisquam,
					voluptatibus, doloremque, voluptas, quos, quis, doloribus, consequatur voluptatem, quisquam, voluptatibus,
					doloremque, voluptas, quos, quis, doloribus, consequatur voluptatem, quisquam, voluptatibus, doloremque,
					voluptas, quos, quis, doloribus, consequatur voluptatem, quisquam, voluptatibus, dolor
					</p>
			</div>
		</section>
	);
};