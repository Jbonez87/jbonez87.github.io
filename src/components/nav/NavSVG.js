import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavSVG extends Component {
  constructor(props) {
    super(props);
    this.assignPath = this.assignPath.bind(this);
  }
  assignPath() {
    let content;
    switch (this.props.svgPath) {
      case 'home':
        content = (
          <g>
            <path
              d="M10 4v32h50V4H10zm7 7h16v7H17v-7zm20 0h16v7H37v-7zM17 22h16v7H17v-7zm20 0h16v7H37v-7zM20.812 38c.78-.073.97 1.927.188 2h28c-.548-.008-.986-.452-.986-1s.438-.992.986-1H21c-.037-.002-.057-.002-.094 0-.036-.002-.057-.002-.094 0z"
              fillRule="evenodd"
              fill="#B9B9B9"
              strokeWidth="2"
              stroke="rgba(0,0,0,0)"
            />
            <path
              d="M16.42 53.908h5.35v-3.433h1.523v8.402H21.77v-3.434h-5.35v3.434h-1.524v-8.402h1.524v3.433zm17.473 1.57q0 .768-.264 1.413-.27.65-.74 1.12-.47.47-1.11.73-.64.26-1.4.26h-2.06q-.76 0-1.4-.26-.65-.26-1.12-.73-.47-.47-.74-1.11-.27-.64-.27-1.41v-1.61q0-.76.263-1.41.27-.64.74-1.11.47-.46 1.114-.73.645-.26 1.4-.26h2.064q.75 0 1.393.27.643.26 1.11.73.47.47.734 1.11.266.65.266 1.41v1.61zm-1.524-1.605q0-.45-.15-.817-.15-.367-.41-.627-.26-.27-.63-.41-.37-.15-.81-.15h-2.06q-.45 0-.81.14-.37.14-.63.4-.27.26-.41.62-.15.37-.15.82v1.603q0 .45.14.82.14.366.405.63.264.26.63.4.367.145.81.145h2.053q.443 0 .81-.144.366-.14.63-.4.263-.26.41-.626.14-.37.14-.82v-1.6zm12.8 5.004h-1.53v-5.004l-2.7 4.752q-.1.182-.28.275-.18.094-.39.094-.2 0-.38-.094-.178-.093-.27-.275l-2.72-4.752v5.004h-1.53v-7.752q0-.264.156-.47.154-.204.406-.274.123-.02.246-.02.123.01.237.06.12.05.21.13.096.08.16.19l3.47 6.03 3.466-6.03q.133-.22.37-.31t.494-.03q.25.07.406.28.16.208.16.47v7.75zm8.67-3.434h-4.81v-1.535h4.81v1.535zm.68 3.434h-5.49q-.32 0-.69-.11-.38-.113-.7-.368-.32-.26-.536-.67-.214-.41-.214-1v-5.49q0-.16.06-.3.058-.14.16-.25.103-.11.244-.17.14-.06.304-.06h6.86v1.52h-6.1v4.74q0 .3.156.452.16.16.467.16h5.487v1.52z"
              fillRule="evenodd"
              fill="#50505A"
              stroke="rgba(0,0,0,0)"
              strokeLinecap="square"
            />
          </g>
        );
        break;
      case 'projects':
        content = (
          <g>
            <path
              d="M9.238 53.99q0 .522-.13.932-.128.41-.347.724-.22.313-.5.536-.28.222-.6.363-.31.14-.63.205-.32.064-.6.064H2.98V55.29h3.44q.293-.022.53-.12.237-.096.407-.26.17-.164.264-.395.1-.232.1-.525v-.69q-.03-.288-.12-.53-.09-.24-.25-.41-.16-.17-.39-.265-.23-.097-.52-.097H2.99q-.304 0-.463.158-.158.158-.158.457v6.264H.84v-6.264q0-.586.214-.996.213-.41.533-.662.31-.252.69-.366.37-.12.69-.12h3.45q.51 0 .92.13.41.13.724.35.31.22.53.5.22.28.37.6.14.31.21.63.07.32.07.6v.69zm9.697-.69q0 .52-.128.93-.13.41-.35.724-.22.314-.506.536-.28.223-.6.366-.31.144-.63.208-.32.065-.6.065l3.18 2.74h-2.35l-3.17-2.75h-1.1V54.6h3.45q.29-.022.53-.12.24-.095.41-.26t.27-.395q.09-.232.09-.53v-.962q0-.13-.03-.196-.03-.07-.08-.1t-.104-.04q-.057-.005-.104-.005h-5.03v6.88h-1.53V51.24q0-.158.057-.3.057-.14.16-.245.102-.105.243-.164.14-.05.307-.05h5.78q.51 0 .86.19.352.19.57.46.22.28.318.6.09.33.09.61v.98zm10.348 2.18q0 .766-.264 1.41-.27.645-.74 1.114-.47.47-1.11.73-.64.26-1.4.26h-2.06q-.76 0-1.4-.26-.65-.26-1.12-.73-.47-.47-.74-1.113-.27-.64-.27-1.41v-1.6q0-.76.26-1.41.27-.64.74-1.11.47-.46 1.11-.73.645-.26 1.4-.26h2.063q.757 0 1.4.27.64.27 1.11.73.47.47.73 1.12.263.65.263 1.41v1.6zm-1.523-1.607q0-.45-.144-.817-.143-.367-.404-.627-.26-.27-.627-.41-.366-.15-.806-.15h-2.07q-.45 0-.82.14-.37.14-.63.4t-.41.62q-.15.37-.15.82v1.6q0 .45.14.82.143.365.406.63.264.26.63.4.366.144.812.144h2.05q.443 0 .81-.144.364-.14.63-.4.262-.26.405-.625.146-.37.146-.82v-1.6zm10.095 2.865q0 .457-.158.85-.158.392-.442.68-.284.287-.677.448-.393.16-.855.16H30.14v-1.522h5.583q.28 0 .44-.162.157-.16.157-.454v-6.263h1.535v6.263zm8.655-1.295H41.7v-1.535h4.81v1.535zm.685 3.434H41.7q-.317 0-.692-.11-.375-.113-.695-.368-.32-.26-.533-.67-.214-.41-.214-1v-5.49q0-.16.06-.3.058-.14.16-.25.103-.11.243-.17.14-.06.3-.06h6.86v1.52h-6.1v4.74q0 .3.15.45.16.16.46.16h5.49v1.52zm8.994 0h-5.5q-.21 0-.46-.05t-.48-.155q-.24-.106-.46-.273-.22-.17-.39-.41-.17-.24-.27-.55-.1-.32-.1-.71v-4.12q0-.21.05-.46t.15-.48q.1-.24.27-.46.17-.22.405-.39.24-.17.55-.27.31-.1.702-.1h5.492V52h-5.48q-.3 0-.456.158-.16.158-.16.47v4.112q0 .293.16.454.165.162.458.162h5.5v1.523zm9.03-6.88h-3.36v6.88h-1.52v-6.88h-3.36v-1.522h8.24v1.523zm9.19 4.407q0 .45-.12.812-.12.36-.3.636-.19.275-.44.468-.25.194-.52.317t-.55.18q-.28.06-.53.06h-5.87v-1.523h5.87q.44 0 .68-.258.24-.258.24-.692 0-.21-.06-.386-.06-.176-.18-.305-.12-.13-.29-.2t-.385-.07h-3.51q-.37 0-.795-.13-.43-.133-.792-.426-.363-.293-.61-.768-.24-.48-.24-1.16 0-.69.247-1.16.24-.47.61-.77.364-.3.79-.43.43-.13.8-.13h5.183v1.52h-5.18q-.435 0-.68.26-.24.26-.24.69 0 .44.245.69.243.25.677.25h3.51q.246.01.52.07.276.06.55.19.27.13.515.325t.436.472q.19.27.31.63.11.355.11.806z"
              fillRule="evenodd"
              fill="#58585A"
              stroke="rgba(0,0,0,0)"
              strokeLinecap="square"
            />
            <path
              className="rotate"
              d="M29.962 5c-1.39 0-2.587.76-3.28 1.875l-4.42 7.82 3.795 6.59 5.477-9.428h20.658L49.4 6.875C48.706 5.76 47.508 5 46.12 5H29.962zm2.52 8.57L27.032 23l4.42 7.634 1.03 1.795H43.52L49.05 23l-5.53-9.43H32.483zm13.096 0L51.054 23l-.27.43L40.56 41h5.558c1.388 0 2.586-.76 3.28-1.875l8.08-14.143c.694-1.2.694-2.743 0-3.857L53.22 13.57h-7.644zm-24.373 2.92l-2.684 4.635c-.69 1.2-.69 2.657 0 3.857l8.08 14.143c.7 1.2 1.9 1.875 3.28 1.875h8.6l4.07-6.857H31.54l-1.47-2.573-.108-.16L25.027 23l-3.822-6.51zm16.836 2.224c2.43 0 4.34 1.886 4.34 4.286 0 2.4-1.91 4.286-4.33 4.286-2.43 0-4.33-1.886-4.33-4.286 0-2.4 1.91-4.286 4.34-4.286z"
              fillRule="evenodd"
              fill="#B9B9B9"
              strokeWidth="2"
              stroke="rgba(0,0,0,0)"
            />
          </g>
        );
        break;
      case 'contact':
        content = (
          <g>
            <path
              className="open"
              d="M37.5 1.12L64 21H11L37.5 1.12z"
              fill="#8B8B8B" fillOpacity="100"
            />
            <path
              fill="#B9B9B9"
              fillOpacity="100"
              d="M11 21h53v24H11z"
            />
            <path
              d="M37.5 40.88L11 21h53L37.5 40.88z"
              fill="#8B8B8B"
              fillOpacity="100"
            />
            <path
              d="M13.408 63.877H7.912q-.21 0-.454-.05-.243-.05-.48-.155-.238-.106-.455-.273-.216-.17-.383-.41-.167-.24-.267-.55-.1-.32-.1-.71v-4.12q0-.21.05-.46.05-.246.156-.48.1-.24.27-.457.17-.217.4-.384.232-.167.55-.267.31-.1.7-.1h5.5V57H7.91q-.3 0-.457.158-.158.158-.158.47v4.112q0 .293.16.454.162.162.455.162h5.497v1.523zm10.26-3.398q0 .76-.264 1.41-.263.64-.732 1.11-.47.47-1.11.73-.642.26-1.398.26h-2.062q-.756 0-1.4-.26-.645-.26-1.114-.73-.47-.47-.735-1.12-.267-.65-.267-1.41v-1.6q0-.768.267-1.41.266-.65.735-1.118.47-.464 1.113-.73.65-.262 1.41-.262h2.06q.76 0 1.4.265.64.264 1.11.73.47.465.73 1.113.27.647.27 1.41v1.605zm-1.523-1.61q0-.45-.144-.82-.14-.37-.4-.63t-.62-.41q-.36-.146-.8-.146h-2.07q-.444 0-.81.143-.365.146-.63.407-.263.26-.406.628-.146.366-.146.817v1.605q0 .45.143.82.14.362.4.623.264.26.63.4.366.145.81.145h2.05q.448 0 .814-.144.364-.145.63-.406.26-.26.405-.625.145-.365.145-.816v-1.6zm11.425 4.35q0 .16-.06.3-.063.14-.165.24-.103.1-.243.16-.14.056-.3.056-.14 0-.283-.05-.15-.05-.26-.17l-5.57-5.81v5.917h-1.52v-7.75q0-.235.13-.426.13-.19.33-.283.216-.09.445-.045.23.043.392.213l5.565 5.807v-5.92h1.522v7.75zm9.364-6.23h-3.358v6.88h-1.523v-6.88H34.69v-1.52h8.244v1.52zm9.363 6.88h-1.524v-2.06h-5.355v2.06h-1.523v-4.2q0-.92.316-1.7.32-.777.88-1.33.57-.56 1.33-.87.77-.31 1.68-.31h3.44q.16 0 .3.06.14.06.25.162.106.106.164.246.06.14.06.3v7.635zm-6.88-3.59h5.356V57h-2.677q-.07 0-.296.02-.226.02-.522.103-.296.083-.624.253-.328.17-.603.47-.27.298-.45.746-.18.447-.18 1.086v.615zm16.173 3.59h-5.496q-.21 0-.454-.05-.244-.05-.48-.16-.238-.108-.455-.275-.217-.17-.384-.406-.16-.237-.26-.55-.1-.314-.1-.707v-4.12q0-.21.05-.458.05-.245.16-.48.11-.24.28-.456.17-.214.41-.38.237-.168.548-.268.31-.1.705-.1h5.49V57h-5.5q-.3 0-.457.158-.16.158-.16.47v4.112q0 .293.16.454.16.162.457.162h5.49v1.523zm9.035-6.88h-3.357v6.88h-1.524v-6.88H62.38v-1.52h8.245v1.52z"
              fillRule="evenodd"
              fill="#58585A"
              stroke="rgba(0,0,0,0)"
              strokeLinecap="square"
            />
          </g>
        );
        break;
      case 'networks':
        content = (
          <g>
            <circle
              vectorEffect="non-scaling-stroke"
              r="1"
              fill="#B9B9B9"
              transform="matrix(5.24235 0 0 4.8611 20.055 10.86)"
              stroke="rgba(0,0,0,0)"
            />
            <circle
              vectorEffect="non-scaling-stroke"
              r="1"
              fill="#B9B9B9"
              transform="matrix(5.24235 0 0 4.69907 40.675 36.3)"
              stroke="rgba(0,0,0,0)"
            />
            <circle
              vectorEffect="non-scaling-stroke"
              r="1"
              fill="#B9B9B9"
              transform="matrix(5.24235 0 0 4.8611 60.945 10.86)"
              stroke="rgba(0,0,0,0)"
            />
            <path
              d="M20.754 15.466l16.426 18.08-13.212-19.444M43.82 33.546l17.125-18.08-3.723-1.364"
              fill="#B9B9B9"
              stroke="rgba(0,0,0,0)"
              strokeLinecap="square"
            />
            <path
              d="M8.78 58.227q0 .164-.06.304-.062.15-.164.25-.103.11-.243.16-.14.06-.3.06-.14 0-.284-.05-.15-.05-.26-.17L1.9 52.97v5.915H.38v-7.75q0-.234.13-.425.13-.19.34-.285.218-.09.447-.044.22.05.39.22l5.563 5.8v-5.92h1.53v7.76zm8.68-2.784h-4.812v-1.535h4.81v1.535zm.685 3.434h-5.497q-.316 0-.69-.11-.376-.113-.695-.368-.32-.26-.534-.67-.22-.41-.22-1v-5.49q0-.16.06-.3.06-.14.16-.25.1-.11.24-.17.14-.06.3-.06h6.86v1.52h-6.1v4.74q0 .3.15.45.16.16.46.16h5.48v1.52zm9.064-6.88h-3.36v6.88h-1.53v-6.88h-3.36v-1.522h8.24v1.523zm11.84-1.522l-1.4 7.875q-.05.234-.21.404-.17.17-.4.217-.24.05-.46-.05-.22-.09-.34-.29l-2.79-4.58-2.8 4.58q-.1.17-.27.27-.18.1-.38.1-.27 0-.48-.17-.21-.17-.26-.45l-1.42-7.88h1.55l1.01 5.55 2.4-3.83q.1-.17.27-.26t.37-.09q.2 0 .37.1.17.1.28.27l2.39 3.83 1.01-5.55h1.54zm10.12 5.004q0 .76-.27 1.41-.27.64-.73 1.11-.47.47-1.11.73-.65.26-1.4.26H43.6q-.756 0-1.4-.26-.646-.26-1.114-.73-.47-.47-.736-1.12-.266-.65-.266-1.41v-1.6q0-.77.265-1.41.26-.65.73-1.12.47-.47 1.11-.73.64-.26 1.4-.26h2.06q.75 0 1.39.26.64.26 1.11.73.47.46.73 1.11.26.64.26 1.41v1.6zm-1.53-1.61q0-.45-.15-.82-.15-.37-.41-.63t-.63-.41q-.37-.15-.81-.15H43.6q-.446 0-.812.14-.365.14-.63.4-.263.26-.406.62-.14.37-.14.82v1.61q0 .45.143.81.144.37.41.63.264.26.63.4t.81.14h2.052q.443 0 .81-.14.366-.15.63-.41.263-.26.407-.63.142-.366.142-.817v-1.6zm11.42-.58q0 .52-.13.93-.13.41-.35.72-.22.31-.51.53-.29.22-.6.36-.32.14-.64.21-.32.06-.6.06l3.18 2.74h-2.35l-3.16-2.72h-1.09V54.6h3.44q.28-.024.52-.12.23-.097.41-.26t.26-.397q.1-.236.1-.53v-.966q0-.13-.034-.193-.03-.068-.08-.1t-.1-.038q-.06-.008-.106-.008H52.2v6.88h-1.52v-7.63q0-.158.06-.3.06-.14.16-.245.105-.105.246-.164.14-.06.304-.06h5.785q.51 0 .862.18.35.18.57.46.22.28.316.6.1.32.1.6v.97zm10.34 5.58h-2.16l-3.43-3.44h-1.07V53.9h1.07l3.42-3.432h2.17l-4.32 4.2 4.32 4.2zm-7.27 0h-1.52v-8.4h1.52v8.4zm16.3-2.48q0 .45-.12.81-.12.36-.31.63t-.44.47q-.25.19-.52.31t-.55.18q-.28.06-.53.06H70.1v-1.52h5.877q.44 0 .682-.26.24-.26.24-.69 0-.21-.07-.39-.07-.18-.19-.31t-.3-.2-.388-.07h-3.5q-.37 0-.8-.13-.43-.14-.796-.43-.37-.3-.61-.77Q70 53.6 70 52.92q0-.69.243-1.16.24-.48.61-.77.367-.3.79-.43.43-.13.8-.13h5.185v1.52h-5.18q-.44 0-.68.26-.25.26-.25.692 0 .437.24.69.245.255.68.255H76q.246 0 .52.06.277.06.55.19.272.13.518.324t.436.47q.19.274.3.63.11.357.11.808z"
              fillRule="evenodd"
              fill="#58585A"
              stroke="rgba(0,0,0,0)"
              strokeLinecap="square"
            />
          </g>
        );
        break;
      default:
        console.log(this.props.svgPath);
    }
    return content;
  }
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin"
        style={{ isolation: 'isolate' }}
        width={this.props.width}
        height={this.props.height}
        id={this.props.idType}
      >
        {this.assignPath()}
      </svg>
    );
  }
}

NavSVG.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  svgPath: PropTypes.string.isRequired,
  idType: PropTypes.string.isRequired,
};

export default NavSVG;