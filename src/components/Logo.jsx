import React, { useState, useEffect } from 'react';

const Logo = ({ type = 'complete', className = '', lightMode = false, recruiterMode = false }) => {
  const [isReady, setIsReady] = useState(false);

  const isScrolled = className?.includes('scrolled') || false;

  useEffect(() => {
    // Se for modo recrutador, já pula para o estado pronto (sem animação de desenho)
    if (recruiterMode) {
      setIsReady(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsReady(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, [recruiterMode]);

  // Se for modo recrutador, o texto nunca "sai" (fica sempre visível e sem delay)
  const showExitingEffect = isScrolled && !recruiterMode;

  // 1. Logo-Outline (Idle Base State)
  const outlinePaths = {
    l1: "M247.4332,123.729l-47.9427,166.8406h52.737c-.4621,7.7963-7.1377,15.3685-13.1085,19.972-2.154,1.6607-12.2094,7.8348-14.2188,7.8348h-76.2289l52.737-194.6473h46.025Z",
    l2: "M329.8946 185.0957 L284.8285 343.3066 L363.4545 343.3066 L353.3865 375.9076 L236.8858 375.9076 L286.7462 185.0957 Z",
    brackets: [
      "M126.1381,71.9509v20.1359H59.4978c-.5792,0-7.4668,3.3152-8.4665,3.9986-3.8066,2.602-9.2723,11.2152-9.2723,15.6579v59.9284h-20.1359v-64.7226c0-15.3969,21.6433-34.9982,36.9159-34.9982h67.5992Z",
      "M41.759,338.5123v62.8049c0,7.0804,11.6107,18.6977,18.6977,18.6977h65.6815v19.1771H54.7035c-13.6668,0-33.0805-20.3124-33.0805-34.0393v-66.1609c1.5424-2.3719,3.7539-.4852,6.1905-.4322,4.6399.101,9.315-.169,13.9455-.0472Z",
      "M490.5026,171.6717h-19.1771v-58.0107c0-3.0235-3.2249-10.3773-5.2535-12.9647-2.4537-3.1298-10.5745-8.6095-14.403-8.6095h-64.7226v-20.1359h63.7638l8.4062,1.1824c12.8998,1.8229,31.3863,19.8122,31.3863,32.857v65.6815Z",
      "M386.9464,439.192v-19.1771h64.7226c3.8253,0,11.9529-5.48,14.4031-8.6094,1.6758-2.1403,5.2534-9.6646,5.2534-12.006v-60.8872c3.9895-.1224,8.0262.1517,12.0246.0458,1.5127-.0401,7.1525-1.9838,7.1525.4337v68.0786c0,12.7593-21.6845,32.1216-34.0393,32.1216h-69.5169Z"
    ]
  };

  // 2. Monograma-Negativa-Rotar (Animated Hover State)
  const rotarPaths = {
    borders: [
      "M342.1245,75.4093l-17.9678,13.5581-44.8708-59.4648c-.39-.5168-7.9859-4.4306-9.2688-4.8625-4.8849-1.6447-16.2508-.7224-20.2152,2.269l-53.4755,40.3515-13.5581-17.9678L240.5218,5.7132c13.739-10.3672,45.8028-4.2524,56.0862,9.3756l45.5165,60.3204Z",
      "M86.3495,156.3494l-56.0423,42.2883c-6.318,4.7674-8.8666,22.9501-4.0947,29.274l44.2252,58.6091-17.1122,12.9125L5.2266,235.6906c-9.2022-12.1952-4.1487-43.1954,8.1001-52.4381l59.037-44.548c3.1551-.2208,2.9606,3.023,4.5539,5.2329,3.0341,4.2083,6.4229,8.1982,9.432,12.412Z",
      "M388.5925,322.3394l-12.9125-17.1122,51.7643-39.0602c2.6979-2.0358,7.0885-9.865,8.0314-13.4173,1.1406-4.2969.5623-15.2328-2.0155-18.6492l-43.5796-57.7535,17.9678-13.5581,42.934,56.8979,4.6051,8.2972c7.0591,12.7382,3.4543,41.3468-8.1858,50.1302l-58.6091,44.2252Z",
      "M138.4977,402.8735l15.5847-14.7199,49.6795,52.5985c2.9362,3.1087,13.6282,5.5075,18.0521,5.0967,3.0257-.281,11.8865-3.149,13.7893-4.9462l49.4815-46.7355c3.1617,3.1482,6.0374,6.6391,9.1926,9.8072,1.1937,1.1986,7.1023,4.2899,5.1377,6.1455l-55.3258,52.2555c-10.3691,9.7937-42.7489,7.0333-52.2322-3.0072l-53.3595-56.4947Z"
    ],
    details: [
      "M312.9395,386.9878l1.9961-11.5543,34.9518,6.0381c1.8217.3147,6.588-.8629,8.3581-1.8158,2.1411-1.1526,6.2879-5.4751,6.6864-7.7818l6.7367-38.9958,12.132,2.0959-6.6369,38.4181-1.5873,4.9417c-2.441,7.5824-15.2038,16.8482-23.0634,15.4905l-39.5735-6.8365Z",
      "M164.0528,67.4991l-1.9961,11.5543-34.9518-6.0381c-1.8217-.3147-6.588.8629-8.3581,1.8158-2.1411,1.1526-6.2879,5.4751-6.6864,7.7818l-6.7367,38.9958-12.132-2.0959,6.6369-38.4181,1.5873-4.9417c2.441-7.5824,15.2038-16.8482,23.0634-15.4905l39.5735,6.8365Z",
      "M389.352,162.7888l-11.5543-1.9961,6.0381-34.9518c.3147-1.8217-.8629-6.588-1.8158-8.3581-1.1526-2.1411-5.4751-6.2879-7.7818-6.6864l-38.9958-6.7367,2.0959-12.132,38.4181,6.6369,4.9417,1.5873c7.5824,2.441,16.8482,15.2038,15.4905,23.0634l-6.8365,39.5735Z",
      "M76.4861,306.4352l11.5543,1.9961-6.0381,34.9518c-.3147,1.8217.8629,6.588,1.8158,8.3581,1.1526,2.1411,5.4751,6.2879,7.7818,6.6864l38.9958,6.7367-2.0959,12.132-38.4181-6.6369-4.9417-1.5873c-7.5824-2.441-16.8482-15.2038-15.4905-23.0634l6.8365-39.5735Z"
    ],
    l1: "M227.905,103.7243l-45.274,157.5537h49.8014c-.4364,7.3623-6.7404,14.513-12.3788,18.8602-2.0341,1.5683-11.5298,7.3987-13.4274,7.3987h-71.9857l49.8014-183.8126h43.4631Z",
    l2: "M305.7763,161.6751 L263.2187,311.0794 L337.4681,311.0794 L327.9606,341.8658 L217.9447,341.8658 L265.0297,161.6751 Z"
  };

  const renderOutline = (size, isGlow) => {
    const llColor = lightMode ? '#070707' : '#FFFFFF';

    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 512 512" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        <defs>
          <linearGradient id="outlineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>

          {/* Gradiente Vivo Animado - Só anima se NÃO for modo recrutador */}
          <linearGradient id="vibrantMovingGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="33%" stopColor="#22D3EE" />
            <stop offset="66%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#3B82F6" />
            {!recruiterMode && (
              <animateTransform 
                attributeName="gradientTransform" 
                type="translate" 
                from="-512" to="512" 
                dur="6s" 
                repeatCount="indefinite" 
              />
            )}
          </linearGradient>
          
          <filter id="llDepth" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity={lightMode ? "0.2" : "0.5"} />
          </filter>

          {isGlow && (
            <filter id="outlineGlow" className="animate-pulse-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          )}
        </defs>

        <g filter={isGlow ? "url(#outlineGlow)" : "none"}>
          {/* 1. Camada Base Estática (Logo-Outline) */}
          <g className="base-outline-group">
            {/* Traçados das bordas */}
            {outlinePaths.brackets.map((d, i) => (
              <path 
                key={`base-bracket-stroke-${i}`} 
                d={d} 
                stroke="url(#outlineGradient)" 
                strokeWidth="1.5" 
                fill="none" 
                className={recruiterMode ? "" : "animate-draw base-bracket"}
                style={recruiterMode ? {} : { animationDelay: `${i * 0.2}s` }}
              />
            ))}
            
            {/* Camada de Preenchimento dos Portais */}
            <g style={{ 
              opacity: recruiterMode ? 1 : 0, 
              animation: recruiterMode ? 'none' : 'fadeInOpacity 1.5s forwards', 
              animationDelay: recruiterMode ? '0s' : '2.5s' 
            }}>
              {outlinePaths.brackets.map((d, i) => (
                <path 
                  key={`base-bracket-fill-${i}`} 
                  d={d} 
                  fill="url(#vibrantMovingGradient)" 
                  opacity="0.8"
                />
              ))}
            </g>

            <g className="base-monogram">
              <path 
                d={outlinePaths.l1} 
                stroke={llColor} 
                strokeWidth="1" 
                fill="none" 
                className={recruiterMode ? "" : "animate-draw"}
                style={recruiterMode ? {} : { animationDelay: '1.2s' }}
              />
              <path 
                d={outlinePaths.l2} 
                stroke={llColor} 
                strokeWidth="1" 
                fill="none" 
                className={recruiterMode ? "" : "animate-draw"}
                style={recruiterMode ? {} : { animationDelay: '1.8s' }}
              />
              {/* Camada de Preenchimento do Monograma Base */}
              <g style={{ 
                opacity: recruiterMode ? 1 : 0, 
                animation: recruiterMode ? 'none' : 'fadeInOpacity 1.5s forwards', 
                animationDelay: recruiterMode ? '0s' : '2.5s' 
              }}>
                <path d={outlinePaths.l1} fill={llColor} opacity="0.9" />
                <path d={outlinePaths.l2} fill={llColor} opacity="0.9" />
              </g>
            </g>
          </g>

          {/* 2. Camada Animada (Monograma-Negativa-Rotar) - Oculta no modo recrutador */}
          {!recruiterMode && (
            <g className="orbital-vortex-layer" transform="translate(26, 21.5)">
              <g className="orbital-rotate-group">
                <g className="orbital-pulse-group">
                  {rotarPaths.borders.map((d, i) => (
                    <path 
                      key={`rotar-border-${i}`} 
                      d={d} 
                      fill="url(#vibrantMovingGradient)" 
                      stroke="url(#outlineGradient)" 
                      strokeWidth="0.5" 
                      className={`rotar-path rotar-border-${i}`}
                    />
                  ))}
                  {rotarPaths.details.map((d, i) => (
                    <path 
                      key={`rotar-detail-${i}`} 
                      d={d} 
                      fill="url(#vibrantMovingGradient)" 
                      stroke="url(#outlineGradient)" 
                      strokeWidth="0.5" 
                      className={`rotar-path rotar-detail-${i}`}
                    />
                  ))}
                </g>
              </g>
              
              <g className="monogram-rotar-group">
                <path d={rotarPaths.l1} fill={llColor} className="rotar-monogram-path" />
                <path d={rotarPaths.l2} fill={llColor} className="rotar-monogram-path" />
              </g>
            </g>
          )}
        </g>
      </svg>
    );
  };

  return (
    <div className={`logo-lockup ${className} ${showExitingEffect ? 'scrolled' : ''} ${isReady ? 'is-ready' : 'is-loading'} ${recruiterMode ? 'is-recruiter' : ''}`} style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: showExitingEffect ? '0' : '18px',
      transition: recruiterMode ? 'none' : 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      width: '100%',
      maxWidth: '280px',
      margin: '0 auto'
    }}>
      <div className="logo-svg-container" style={{ 
        width: '100px', 
        height: '100px',
        transition: recruiterMode ? 'none' : 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: showExitingEffect ? 'translateY(30px)' : 'translateY(0)'
      }}>
        {renderOutline("100%", true)}
      </div>
      
      <div className={`logo-text-container ${showExitingEffect ? 'is-exiting' : ''}`}>
        <div className="logo-text-main" style={{ 
          fontFamily: 'var(--font-heading)', 
          fontWeight: 800, 
          fontSize: '1.6rem', 
          color: lightMode ? '#0F172A' : '#FFFFFF',
          whiteSpace: 'nowrap',
          display: 'flex',
          justifyContent: 'center'
        }}>
          {"LUCAS LIMA".split('').map((char, i) => (
            <span 
              key={i} 
              className={`logo-char ${char === 'L' ? 'char-l' : 'char-other'}`}
              style={{ 
                transitionDelay: showExitingEffect 
                  ? (char === 'L' ? '0.8s' : `${(i % 6) * 0.12}s`) 
                  : '0s',
                transition: recruiterMode ? 'none' : 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logo;
