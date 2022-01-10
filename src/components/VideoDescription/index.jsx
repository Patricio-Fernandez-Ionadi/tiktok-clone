import React from 'react'

import styles from './styles.module.css'
import AlbumDisk from './AlbumDisk'
import SongTicker from '../SongTicker'

export default function VideoDescription({
	author,
	description,
	albumCover,
	tags,
	songTitle,
}) {
	return (
		<footer className={styles.description}>
			<div className={styles.textWrapper}>
				<strong>
					<a className={styles.author} href={`/user/${author}`}>
						@{author}
					</a>
				</strong>
				<p className={styles.text}>
					{description}
					{tags.map((_) => (
						<span key={_}>#{_} </span>
					))}
				</p>

				<SongTicker songTitle={songTitle} />
			</div>
			<div>
				<AlbumDisk albumCover={albumCover} />
			</div>
		</footer>
	)
}
