import React from 'react'
import VideoPlayer from '../VideoPlayer'

import styles from './styles.module.css'

const VIDEOS = [
	{
		author: 'pablitocastilloo',
		src: 'https://v16-webapp.tiktok.com/37ae661fea1dd58238fee7db54b4d24f/61da6df4/video/tos/useast2a/tos-useast2a-ve-0068c001/49c5f011a99a47c6b166d70a19be0916/?a=1988&br=1944&bt=972&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=2022010823085801022312805013FB302C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ampvbzo6Znk0ODMzNzczM0ApZ2U1NTY2OWQ5NzY0aTM0NGdmYGpkcjRnNWdgLS1kMTZzc19jNTUtXzYwYTBeLjEvYDU6Yw%3D%3D&vl=&vr=',
		description: '123',
		likes: 123,
		share: 456,
		comments: [],
		songTitle: '',
		albumCover: '',
		id: 1,
	},
	{
		author: 'ayluusanchez',
		src: 'https://v16-webapp.tiktok.com/f1a99bf2cc6dc350dfa8a2d3be07c864/61da6e08/video/tos/useast2a/tos-useast2a-ve-0068c004/2de32627328345a996f5a6c9f85e76ef/?a=1988&br=1980&bt=990&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=2022010823085801022312805013FB302C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=andvcTo6ZmVnOjMzNzczM0ApPDs7OzpmZTxkNzY0ZThkNmdsYV5tcjQwcjVgLS1kMTZzcy1hXzBhYS02NjUxX2M2XzU6Yw%3D%3D&vl=&vr=',
		description: 'asd',
		likes: 321,
		share: 654,
		comments: [],
		songTitle: '',
		albumCover: '',
		id: 2,
	},
]

export default function FeedVideos() {
	return VIDEOS.map((video) => (
		<div key={video.id} className={styles.item}>
			<VideoPlayer {...video} />
		</div>
	))
}
