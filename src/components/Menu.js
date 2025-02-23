import { Link } from "react-router-dom";

export default function Menu() {
	return (
		<div class="flex">
			<div class="flex-item">
				<h1>Our new menu</h1>
				<img src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800/https://foodcnr.com/wp-content/uploads/2018/05/Summer-BBQ.jpg" />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem
					odit, obcaecati mollitia, commodi doloribus modi labore amet
					asperiores illum doloremque ut. Sequi est iste odio laboriosam eos
					necessitatibus harum?
				</p>
				<a href="#">See our menu here</a>
			</div>
			<div class="flex-item">
				<h1>Book a table</h1>
				<img src="https://la-casa-schaafheim.de/de-wAssets/img/adobe-stock/speisen/weblication/wThumbnails/49361d80-1b5872d0@2000w2x.jpeg" />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda at
					qui vitae unde dolorem corrupti in, accusamus eum tempore suscipit
					fugiat numquam sunt molestias earum sequi quos ratione nobis quas!
				</p>
				<Link to="/booking">Book your table now</Link>
			</div>
			<div class="flex-item">
				<h1>Opening hours</h1>
				<img src="https://www.heimarbeit.de/wp-content/uploads/2015/05/Koch-Gehalt.jpg" />
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, facere
					possimus! At ut, soluta aperiam repudiandae deleniti accusamus tenetur
					eligendi nihil omnis cupiditate ipsa ea debitis dignissimos qui
					assumenda. Adipisci!
				</p>
				<p>Mo - Fr: 10am - 8pm</p>
				<p>Sa - Su: 12pm - 10pm</p>
			</div>
		</div>
	)
}
