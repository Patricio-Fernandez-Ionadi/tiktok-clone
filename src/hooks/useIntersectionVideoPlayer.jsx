import React, { useEffect, useState } from 'react'
const options = {
	root: document.querySelector('main'),
	rootMargin: '0px',
	threshold: 0.9,
}

const observer = new window.IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const { target, isIntersecting } = entry
		target._handleIntersect(isIntersecting)
	})
}, options)

export const useIntersectionVideoPlayer = ({ video }) => {
	const [playing, setPlaying] = useState(false)

	const handlePlay = () => {
		const { current: videoElement } = video

		playing ? videoElement.pause() : videoElement.play()

		setPlaying(!playing)
	}

	useEffect(() => {
		if (!video.current) return
		observer.observe(video.current)
		video.current._handleIntersect = (isIntersecting) => {
			const { current: videoElement } = video
			if (isIntersecting) {
				videoElement.load()
				videoElement.play()
			} else {
				videoElement.pause()
			}

			setPlaying(!videoElement.paused)
		}
	}, [video.current])
	return { playing, handlePlay }
}
