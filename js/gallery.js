const images = [
	{
		preview: './Telegram Desktop/photo_2023-12-13_00-37-40.jpg',
		original: './Telegram Desktop/photo_2023-12-13_00-37-40.jpg',
		description: 'Hokkaido Flower',
	},
	{
		preview: './Telegram Desktop/photo_2023-12-13_00-37-50.jpg',
		original: './Telegram Desktop/photo_2023-12-13_00-37-50.jpg',
		description: 'Container Haulage Freight',
	},
	{
		preview: './Telegram Desktop/photo_2023-12-13_00-37-51.jpg',
		original: './Telegram Desktop/photo_2023-12-13_00-37-51.jpg',
		description: 'Aerial Beach View',
	},
	{
		preview: './Telegram Desktop/photo_2023-12-13_00-37-52.jpg',
		original: './Telegram Desktop/photo_2023-12-13_00-37-52.jpg',
		description: 'Flower Blooms',
	},
	{
		preview: './Telegram Desktop/photo_2023-12-13_00-37-53.jpg',
		original: './Telegram Desktop/photo_2023-12-13_00-37-53.jpg',
		description: 'Alpine Mountains',
	},
	{
		preview: './Telegram Desktop/photo_2023-12-13_00-37-55.jpg',
		original: './Telegram Desktop/photo_2023-12-13_00-37-55.jpg',
		description: 'Mountain Lake Sailing',
	},
	{
		preview: './Telegram Desktop/photo_2023-12-13_00-37-57.jpg',
		original: './Telegram Desktop/photo_2023-12-13_00-37-57.jpg',
		description: 'Alpine Spring Meadows',
	},
	{
		preview: './Telegram Desktop/photo_2023-12-13_00-37-58.jpg',
		original: './Telegram Desktop/photo_2023-12-13_00-37-58.jpg',
		description: 'Nature Landscape',
	},
	{
		preview: './Telegram Desktop/photo_2023-12-13_00-44-51.jpg',
		original: './Telegram Desktop/photo_2023-12-13_00-44-51.jpg',
		description: 'Lighthouse Coast Sea',
	},
]

const galleryContainer = document.querySelector('.gallery')
images.forEach(({ preview, original, description }) => {
	const galleryItem = document.createElement('li')
	galleryItem.classList.add('gallery-item')

	const galleryLink = document.createElement('a')
	galleryLink.classList.add('gallery-link')
	galleryLink.href = original
	galleryLink.addEventListener('click', event => {
		event.preventDefault()
	})

	const galleryImage = document.createElement('img')
	galleryImage.classList.add('gallery-image')

	galleryImage.src = preview
	galleryImage.alt = description
	galleryImage.dataset.source = original

	galleryLink.appendChild(galleryImage)
	galleryItem.appendChild(galleryLink)
	galleryContainer.appendChild(galleryItem)

	galleryContainer.addEventListener('click', event => {
		event.preventDefault()
		const target = event.target
		if (target.nodeName === 'IMG') {
			const largeImageSrc = target.dataset.source
			console.log('Посилання на велике зображення:', largeImageSrc)
			const myModal = basicLightbox.create(
				`<img width="1400" haigth="900" src="${largeImageSrc}">`,
				{
					onShow: () => {
						document.addEventListener('keydown', handleKeyPress)
					},
					onClose: () => {
						document.removeEventListener('keydown', handleKeyPress)
					},
				}
			)
			myModal.show()

			function handleKeyPress(event) {
				if (event.key === 'Escape') {
					myModal.close()
				}
			}
			function handleClickOutside(event) {
				const isClickInsideImage = event.target.closest('.basicLightbox')
				if (!isClickInsideImage) {
					myModal.close()
				}
			}
		}
	})
})
