import React from "react";
import "./Track.css";
// eslint-disable-next-line
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.renderPreview = this.renderPreview.bind(this);
    this.previewPlay = this.previewPlay.bind(this);
    this.updatePreview = this.updatePreview.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={this.addTrack}>
          +
        </button>
      );
    }
  }

  renderPreview() {
    return (
      <button className="Track-action" onClick={this.previewPlay}>
        <FontAwesomeIcon icon={faPlayCircle} className="Track-action" />
      </button>
    );
  }

  updatePreview() {
    this.props.updateAudio(new Audio(this.props.track.preview_url));
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }
  //TODO: WORKING HERE ATM
  previewPlay() {
    this.updatePreview();

    this.props.previewPlaying
      ? this.props.preview.pause()
      : this.props.preview.play();

    this.props.preview.onplaying = this.props.togglePlay;
    this.props.preview.onpause = this.props.togglePlay;
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
        {this.props.audioPreview && this.renderPreview()}
      </div>
    );
  }
}
