var searchIndex = {};
searchIndex['image'] = {"items":[[0,"","image",""],[1,"Image","","A Generic representation of an image"],[11,"pixels","","",0],[11,"width","","",0],[11,"height","","",0],[11,"color","","",0],[1,"JPEGDecoder","","The representation of a JPEG decoder"],[11,"r","","",1],[11,"qtables","","",1],[11,"dctables","","",1],[11,"actables","","",1],[11,"h","","",1],[11,"height","","",1],[11,"width","","",1],[11,"num_components","","",1],[11,"scan_components","","",1],[11,"components","","",1],[11,"mcu_row","","",1],[11,"mcu","","",1],[11,"hmax","","",1],[11,"vmax","","",1],[11,"interval","","",1],[11,"mcucount","","",1],[11,"expected_rst","","",1],[11,"row_count","","",1],[11,"decoded_rows","","",1],[11,"padded_width","","",1],[11,"state","","",1],[1,"JPEGEncoder","","The representation of a JPEG encoder"],[11,"w","","",2],[11,"components","","",2],[11,"tables","","",2],[11,"accumulator","","",2],[11,"nbits","","",2],[11,"luma_dctable","","",2],[11,"luma_actable","","",2],[11,"chroma_dctable","","",2],[11,"chroma_actable","","",2],[1,"PNGDecoder","","The representation of a PNG decoder"],[11,"z","","",3],[11,"crc","","",3],[11,"previous","","",3],[11,"state","","",3],[11,"width","","",3],[11,"height","","",3],[11,"bit_depth","","",3],[11,"colour_type","","",3],[11,"pixel_type","","",3],[11,"palette","","",3],[11,"interlace_method","","",3],[11,"chunk_length","","",3],[11,"chunk_type","","",3],[11,"bpp","","",3],[11,"rlength","","",3],[11,"decoded_rows","","",3],[1,"PNGEncoder","","The representation of a PNG encoder"],[11,"w","","",4],[11,"crc","","",4],[1,"GIFDecoder","","The Representation of a GIF decoder"],[11,"r","","",5],[11,"width","","",5],[11,"height","","",5],[11,"global_table","","",5],[11,"local_table","","",5],[11,"delay","","",5],[11,"image","","",5],[11,"global_backgroud_index","","",5],[11,"local_transparent_index","","",5],[11,"have_header","","",5],[11,"decoded_rows","","",5],[1,"WebpDecoder","",""],[11,"r","","",6],[11,"frame","","",6],[11,"have_frame","","",6],[11,"decoded_rows","","",6],[2,"ImageError","","An enumeration of Image Errors"],[12,"FormatError","","The Image is not formatted properly",7],[12,"DimensionError","","The Image's dimensions are either too small or too large",7],[12,"UnsupportedError","","The Decoder does not support this image format",7],[12,"UnsupportedColor","","The Decoder does not support this color type",7],[12,"NotEnoughData","","Not enough data was provided to the Decoder\nto decode the image",7],[12,"IoError","","An I/O Error occurred while decoding the image",7],[12,"ImageEnd","","The end of the image has been reached",7],[2,"ImageFormat","","An enumeration of supported image formats.\nNot all formats support both encoding and decoding."],[12,"PNG","","",8],[12,"JPEG","","",8],[12,"GIF","","",8],[12,"WEBP","","",8],[12,"PPM","","",8],[0,"vp8","","An implementation of the VP8 Video Codec"],[1,"Frame","image::vp8","A Representation of the last decoded video frame"],[11,"width","","The width of the luma plane",9],[11,"height","","The height of the luma plane",9],[11,"ybuf","","The luma plane of the frame",9],[11,"keyframe","","Indicates whether this frame is a keyframe",9],[11,"version","","",9],[11,"for_display","","Indicates whether this frame is intended for display",9],[11,"pixel_type","","The pixel type of the frame as defined by Section 9.2\nof the VP8 Specification",9],[11,"filter","","",9],[11,"filter_level","","",9],[11,"sharpness_level","","",9],[1,"VP8Decoder","","VP8 Decoder\nOnly decodes keyframes"],[11,"r","","",10],[11,"b","","",10],[11,"mbwidth","","",10],[11,"mbheight","","",10],[11,"frame","","",10],[11,"segments_enabled","","",10],[11,"segments_update_map","","",10],[11,"segment","","",10],[11,"partitions","","",10],[11,"num_partitions","","",10],[11,"segment_tree_probs","","",10],[11,"token_probs","","",10],[11,"prob_intra","","",10],[11,"prob_skip_false","","",10],[11,"top","","",10],[11,"left","","",10],[11,"top_border","","",10],[11,"left_border","","",10],[10,"clone","","",9],[10,"fmt","","",9],[10,"default","","",9],[10,"new","","Create a new decoder.\nThe reader must present a raw vp8 bitstream to the decoder",10],[10,"decode_frame","","Decodes the current frame and returns a reference to it",10],[0,"colortype","image","Types and methods for representing and manipulating colors"],[2,"ColorType","image::colortype","An enumeration over supported color types and their bit depths"],[12,"Grey","","Pixel is greyscale",11],[12,"RGB","","Pixel contains R, G and B channels",11],[12,"Palette","","Pixel is an index into a color palette",11],[12,"GreyA","","Pixel is greyscale with an alpha channel",11],[12,"RGBA","","Pixel is RGB with an alpha channel",11],[3,"bits_per_pixel","","Returns the number of bits contained in a pixel of ColorType c"],[3,"num_components","","Returns the number of color channels that make up this pixel"],[10,"clone","","",11],[10,"fmt","","",11],[10,"eq","","",11],[10,"ne","","",11],[0,"jpeg","image","Decoding and Encoding of JPEG Images"],[1,"JPEGDecoder","image::jpeg","The representation of a JPEG decoder"],[11,"r","","",1],[11,"qtables","","",1],[11,"dctables","","",1],[11,"actables","","",1],[11,"h","","",1],[11,"height","","",1],[11,"width","","",1],[11,"num_components","","",1],[11,"scan_components","","",1],[11,"components","","",1],[11,"mcu_row","","",1],[11,"mcu","","",1],[11,"hmax","","",1],[11,"vmax","","",1],[11,"interval","","",1],[11,"mcucount","","",1],[11,"expected_rst","","",1],[11,"row_count","","",1],[11,"decoded_rows","","",1],[11,"padded_width","","",1],[11,"state","","",1],[1,"JPEGEncoder","","The representation of a JPEG encoder"],[11,"w","","",2],[11,"components","","",2],[11,"tables","","",2],[11,"accumulator","","",2],[11,"nbits","","",2],[11,"luma_dctable","","",2],[11,"luma_actable","","",2],[11,"chroma_dctable","","",2],[11,"chroma_actable","","",2],[1,"Component","","A representation of a JPEG component"],[11,"id","","The Component's identifier",12],[11,"h","","Horizontal sampling factor",12],[11,"v","","Vertical sampling factor",12],[11,"tq","","The quantization table selector",12],[11,"dc_table","","Index to the Huffman DC Table",12],[11,"ac_table","","Index to the AC Huffman Table",12],[11,"dc_pred","","The dc prediction of the component",12],[3,"derive_codes_and_sizes","",""],[5,"UNZIGZAG","",""],[10,"clone","","",12],[0,"png","image","Decoding and Encoding of PNG Images"],[1,"PNGDecoder","image::png","The representation of a PNG decoder"],[11,"z","","",3],[11,"crc","","",3],[11,"previous","","",3],[11,"state","","",3],[11,"width","","",3],[11,"height","","",3],[11,"bit_depth","","",3],[11,"colour_type","","",3],[11,"pixel_type","","",3],[11,"palette","","",3],[11,"interlace_method","","",3],[11,"chunk_length","","",3],[11,"chunk_type","","",3],[11,"bpp","","",3],[11,"rlength","","",3],[11,"decoded_rows","","",3],[1,"PNGEncoder","","The representation of a PNG encoder"],[11,"w","","",4],[11,"crc","","",4],[5,"PNGSIGNATURE","",""],[0,"gif","image","Decoding of GIF Images"],[1,"GIFDecoder","image::gif","The Representation of a GIF decoder"],[11,"r","","",5],[11,"width","","",5],[11,"height","","",5],[11,"global_table","","",5],[11,"local_table","","",5],[11,"delay","","",5],[11,"image","","",5],[11,"global_backgroud_index","","",5],[11,"local_transparent_index","","",5],[11,"have_header","","",5],[11,"decoded_rows","","",5],[0,"webp","image","Decoding of Webp Images"],[1,"WebpDecoder","image::webp",""],[11,"r","","",6],[11,"frame","","",6],[11,"have_frame","","",6],[11,"decoded_rows","","",6],[0,"ppm","image","Encoding of PPM Images"],[1,"PPMEncoder","image::ppm",""],[11,"w","","",13],[10,"new","","",13],[10,"encode","","",13],[4,"ImageResult","image",""],[6,"ImageDecoder","","The trait that all decoders implement"],[9,"dimensions","","Return a tuple containing the width and height of the image",14],[9,"colortype","","Return the color type of the image e.g RGB(8) (8bit RGB)",14],[9,"row_len","","Returns the length in bytes of one decoded row of the image",14],[9,"read_scanline","","Read one row from the image into buf\nReturns the row index",14],[9,"read_image","","Decode the entire image and return it as a Vector",14],[10,"load_rect","","Decode a specific region of the image, represented by the rectangle\nstarting from ```x``` and ```y``` and having ```length``` and ```width```",14]],"paths":[[1,"Image"],[1,"JPEGDecoder"],[1,"JPEGEncoder"],[1,"PNGDecoder"],[1,"PNGEncoder"],[1,"GIFDecoder"],[1,"WebpDecoder"],[2,"ImageError"],[2,"ImageFormat"],[1,"Frame"],[1,"VP8Decoder"],[2,"ColorType"],[1,"Component"],[1,"PPMEncoder"],[6,"ImageDecoder"]]};
initSearch(searchIndex);
