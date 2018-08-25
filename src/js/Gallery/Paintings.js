import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/ABSTRACIONES/01.jpg', width: 4, height: 3 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/ABSTRACIONES/02.jpg', width: 1, height: 1 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/ABSTRACIONES/12.jpg', width: 3, height: 4 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/ABSTRACIONES/04.jpg', width: 3, height: 4 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/ABSTRACIONES/05.jpg', width: 3, height: 4 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/ABSTRACIONES/06.jpg', width: 4, height: 3 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/ABSTRACIONES/07.jpg', width: 3, height: 4 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/ABSTRACIONES/08.jpg', width: 4, height: 3 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/ABSTRACIONES/09.jpg', width: 4, height: 3 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/ABSTRACIONES/10.jpg', width: 4, height: 3 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/ABSTRACIONES/11.jpg', width: 4, height: 3 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/ABSTRACIONES/03.jpg', width: 4, height: 3 }
];


class Paintings extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div className="image-container">
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}
export default Paintings;