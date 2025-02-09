'use client'
import Image from 'next/image';
import { useState } from 'react';

import styles from './Description.module.sass';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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';

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false);

  const handleClick = () => setHasBorder(!hasBorder);

	return (
		<section className={styles.Description}>
      <button onClick={handleClick} className={`${styles.Description__button} ${hasBorder ? '' : styles['Description__button--border']}`}>
        <div className={styles.Description__imageContainer}>
          <Image 
            src="/images/description.jpeg" 
            alt="products marquetplace" 
            fill
            placeholder='blur'
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
			<div className={styles.Description__text}>
				<h2>Description</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus! Doloremque, doloremque
					doloremque, voluptatibus, quisquam, doloremque dolores, voluptas, quos, quis, doloribus, consequatur
					voluptatem, quisquam, voluptatibus, doloremque, voluptas, quos, quis
					</p>
			</div>
		</section>
	);
};