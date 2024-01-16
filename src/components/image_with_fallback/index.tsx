import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import img_fallback from 'src/assets/image-notfound.png'

type Props = {
  className?: string
  src: string
  fallbackSrc?: string
  style?: React.CSSProperties
  alt?: string
}

type State = {
  src: string | undefined
  errored: boolean
}

export class ImageWithFallback extends React.Component<Props, State> {
  state: State = {
    src: this.props.src || this.props.fallbackSrc || img_fallback,
    errored: false
  }

  onError = () => {
    if (!this.state.errored) {
      this.setState({
        src: this.props.fallbackSrc || img_fallback,
        errored: true
      })
    }
  }

  render() {
    return (
      <LazyLoadImage
        src={this.state.src}
        style={this.props.style}
        onError={this.onError}
        alt={this.props.alt}
        className={this.props.className}
      />
    )
  }
}
