import { Camera } from './Icons'

/**
 * 사진이 들어갈 자리. 실제 이미지가 확보되면 <img>로 교체하거나
 * 이 컴포넌트에 src를 넘기면 사진이 표시됩니다.
 */
export default function Placeholder({ label, ratio = '16x10', spec, src, alt, className = '', small = false }) {
  if (src) {
    return (
      <div className={`ph ph--${ratio} ${className}`} style={{ border: 0, background: 'none' }}>
        <img src={src} alt={alt || label} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
      </div>
    )
  }
  return (
    <div className={`ph ph--${ratio} ${small ? 'ph--sm' : ''} ${className}`} role="img" aria-label={`사진 자리: ${label}`}>
      <div className="ph__inner">
        <Camera className="ph__icon" />
        <div className="ph__label">[사진: {label}]</div>
        {spec && <div className="ph__spec">{spec}</div>}
      </div>
    </div>
  )
}
