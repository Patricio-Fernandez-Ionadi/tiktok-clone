import React from 'react'
import VideoPlayer from '../VideoPlayer'

import styles from './styles.module.css'

const VIDEOS = [
	{
		author: 'mernesfancy',
		src: 'https://v16-webapp.tiktok.com/ffc4c63816635016480cdeff17b8e69e/61dba0e8/video/tos/useast2a/tos-useast2a-pve-0068/daf2743ac4cf426c8f5204c805931aa0/?a=1988&br=1020&bt=510&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=20220109205839010223119020198342A2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajQ7M2c6ZmtpOTMzNzczM0ApNmczMzQ8ODw8NzU2NGVkaWdybl5lcjRfaXBgLS1kMTZzczIxYjU2YTJhLS5gNl8vL2I6Yw%3D%3D&vl=&vr=',
		description: '',
		tags: ['emiliamernes', 'emilia', 'parati'],
		likes: '199.6K',
		share: '253',
		comments: '178',
		songTitle: 'sonido original creado por mernesfancy',
		albumCover:
			'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/942bf41208b8c3ee540d2bf55901babf~c5_720x720.jpeg?x-expires=1641844800&x-signature=Q%2BxCaHKSBje7sixO%2B227BSuqooo%3D',
		id: 1,
	},
	{
		author: '_sangwoo_mi_hombre_',
		src: 'https://v16-webapp.tiktok.com/42a813f4f8f81cc629796d1231e610b4/61dba32d/video/tos/useast2a/tos-useast2a-ve-0068c002/a036bc17d8144a769928a0f38fdb63b6/?a=1988&br=5262&bt=2631&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=202201092108220101890500411B868B41&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzN2Nzk6ZjprOTMzNzczM0ApaDNnODdmOjtnN2ZkZWloPGdob21xcjQwXm5gLS1kMTZzczZgLmAvMjAwYjUvX14vMWM6Yw%3D%3D&vl=&vr=',
		description: 'Muy mi mamá (créditos del video a @haru.._..uchiha )',
		likes: '1.4M',
		tags: ['fypシ'],
		share: '159K',
		comments: '9289',
		songTitle: 'sonido original creado por Æ',
		albumCover:
			'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d0124ccd07e5fe7f4b3dcfa6161e3713~c5_720x720.jpeg?x-expires=1641848400&x-signature=9rlj9ibCXfWmGnBjIUI6I40Us7Y%3D',
		id: 2,
	},
	{
		author: 'carenalegria',
		src: 'https://v16-webapp.tiktok.com/6486ad0619621b89f2339e38be7e3da5/61dbc589/video/tos/useast2a/tos-useast2a-ve-0068c001/19a4cfafc2d540dbba6fce6a45a2c17d/?a=1988&br=2050&bt=1025&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=20220109233454010223084154129678A2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzVncjk6Zmc2OTMzNzczM0ApODg4OGc1N2U3NzM0OGgzOGcvYmszcjRfbDNgLS1kMTZzc2EvNS8tXjBiXzE0YzFgNjM6Yw%3D%3D&vl=&vr=',
		description: 'No esperaba esa reacción 😬 IG:carenalegria6 ',
		likes: '2.7M',
		tags: [
			'parati',
			'comedia',
			'broma',
			'pareja',
			'couple',
			'prank',
			'peru',
			'fyp',
		],
		share: '25.3K',
		comments: '14.7K',
		songTitle:
			'Monkeys Spinning Monkeys creado por Kevin MacLeod & Kevin The Monkey',
		albumCover:
			'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/383f5db9f1e44955896da2c8eb7be6ac~c5_200x200.jpeg',
		id: 3,
	},
]

export default function FeedVideos() {
	return VIDEOS.map((video) => (
		<div key={video.id} className={styles.item}>
			<VideoPlayer {...video} />
		</div>
	))
}
