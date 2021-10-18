import React from "react";
import { CImage } from "@coreui/react";

// simple home page with a image

function Home() {
	return (
		<CImage
			style={{
				objectFit: "cover",
				overflow: "hidden",
                width:"100%",
                height:"92vh",
                objectPosition: "38% 30%"
			}}
			fluid
			src="images/home.jpg"
		/>
	);
}

export default Home;
