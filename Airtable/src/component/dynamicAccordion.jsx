import React, { useState, useEffect } from "react";
import "./dynamic.css";
import {
	Collapse,
	Box,
	Text,
	Image,
	Button,
	Flex,
	Heading,
} from "@chakra-ui/react";

const AccordionWithImage = () => {
	const [openItemId, setOpenItemId] = useState(null);
	const [activeImage, setActiveImage] = useState(null);
	const [isAutoPlay, setIsAutoPlay] = useState(true);

	// Set the duration for each accordion item to stay open (in milliseconds)
	const delayDuration = 2000;

	// Accordion items with associated images
	const accordionItems = [
		{
			id: 1,
			title: "Marketing",

			content: "Create custom workflow to run campaigns and track successes.",
			button: <button>Explore Marketing &rarr;</button>,
			image:
				"https://images.ctfassets.net/wl95ljfippl8/6tEm54xJ9y02UNB6qsBwfb/f797006ef9d262ffd96211c20ceaf20b/Marketing_Solution_6B.png",
		},
		{
			id: 2,
			title: "Product",
			content:
				"Build roadmaps and alignment while creating products customers love",
			button: <button>Explore Product &rarr;</button>,
			image:
				"https://images.ctfassets.net/wl95ljfippl8/43mx2YzU4bpMiOgsQhCcqW/6f0eb61c2b5614218b8ba7a0553680c9/Product.jpg",
		},
		{
			id: 3,
			title: "Operation",
			content:
				"Bring your data and processess into a single, well-organized place",
			button: <button>Explore Operation &rarr;</button>,
			image:
				"https://images.ctfassets.net/wl95ljfippl8/67w5wXJatBGiypJYBodExU/600c79276433b0a6b034ff505fd81225/Operations.webp",
		},
		{
			id: 4,
			title: "Finance",
			content: "Streaming requests, manage budgets, and automate reporting",
			button: <button>Explore Finance &rarr;</button>,
			image:
				"https://images.ctfassets.net/wl95ljfippl8/7IK2gx05XtMbjmK7r9GZI7/1a0a99f51468e019cc9125c1cf933ef6/Finance.webp",
		},
		{
			id: 5,
			title: "Human Resources",
			content: "Manage and Streaming processess from hire to retire",
			button: <button>Explore Human Resources &rarr;</button>,
			image:
				"https://images.ctfassets.net/wl95ljfippl8/51zIaGAxKdp4fzSRLW9x6p/cccdc28bd0117c81f415d2479ca32b6c/HR.webp",
		},
	];

	useEffect(() => {
		let timeoutId;

		const autoPlayAccordion = (index) => {
			if (index < accordionItems.length && isAutoPlay) {
				timeoutId = setTimeout(() => {
					setOpenItemId(accordionItems[index].id);
					setActiveImage(accordionItems[index].image);
					autoPlayAccordion(index + 1);
				}, delayDuration);
			}
		};

		autoPlayAccordion(0);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [isAutoPlay]);

	const handleToggleAutoPlay = () => {
		setIsAutoPlay((prev) => !prev);
	};

	const handleItemClick = (itemId, itemImage) => {
		setOpenItemId((prev) => (prev === itemId ? null : itemId));
		setActiveImage(itemImage);
		setIsAutoPlay(false); // Stop auto play on manual click
	};

	return (
		<Flex
			padding={"2rem"}
			backgroundColor={"white"}
			alignItems={"center"}
			justifyContent={"center"}
			marginTop={"80px"}
		>
			<Box width={"50%"} height={"auto"}>
				{activeImage && (
					<Box mt={4}>
						<Image
							borderRadius={"2rem"}
							width={"100%"}
							src={activeImage}
							alt="Active"
							objectFit="cover"
						/>
					</Box>
				)}
			</Box>
			<Box
				width={"40%"}
				padding={"5rem"}
				height={"auto"}
				marginLeft={"15px"}
				boxShadow={"rgba(17, 17, 26, 0.1) 0px 0px 16px"}
			>
				{accordionItems.map((item) => (
					<Box
						width={""}
						style={{ marginButton: "2rem" }}
						borderBottom={"1px solid #808080"}
						key={item.id}
						mb={4}
					>
						<Heading
							as="h3"
							size="md"
							cursor="pointer"
							onClick={() => handleItemClick(item.id, item.image)}
						>
							{item.title}
						</Heading>
						<Collapse in={openItemId === item.id}>
							<Box p={1} bg="gray.100">
								{item.content}
								{item.button}
							</Box>
						</Collapse>
					</Box>
				))}
			</Box>
		</Flex>
	);
};

export default AccordionWithImage;
