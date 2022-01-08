import React, { useEffect, useRef, useState } from "react"

import styles from "./styles.module.css"

const SRC =
	"https://v16-webapp.tiktok.com/f9a8f22074df8ec57c61cc8d3228eacd/61da20f0/video/tos/useast2a/tos-useast2a-ve-0068c003/a444a234a3eb404e8bde7848fa7b9586/?a=1988&br=2330&bt=1165&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=2022010817401501022308301218CD5566&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anlvazc6ZnJ5OTMzNzczM0ApZjM1NjRkOWU2N2dlZjs8NWdqcnBecjRfMm9gLS1kMTZzc2MxNGM2YGAtXzReXl4yYGM6Yw%3D%3D&vl=&vr="

export default function VideoPlayer() {
	const [playing, setPlaying] = useState(false)
	const video = useRef()

	const handlePlay = () => {
		if (playing) {
			video.current.pause()
		} else {
			video.current.play()
		}

		setPlaying(!playing)
	}

	useEffect(() => {}, [])

	return (
		<div>
			<video className={styles.video} src={SRC} ref={video} controls={false} />
			<button className={styles.player} onClick={handlePlay}></button>
		</div>
	)
}
