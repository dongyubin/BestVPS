import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '香港VPS和国外虚拟主机推荐',
    Svg: require('@site/static/img/hkvps_hosting.svg').default,
    description: (
      <>
        如果你觉得国内的VPS服务器需要备案不想用，国外的服务器网速又太慢，那么有折中的解决方案吗？<br />
        答案是有的。我们可以选择香港的VPS或者虚拟主机。<br />
        <strong>香港VPS</strong>有能力的话买阿里云和腾讯云国际版网站的香港机器。<br />
        对于才学着自己建外贸网站的朋友来说，使用VPS的上手难度还是比较大，所以我们可以使用性能比较好的虚拟主机来搭建网站。
      </>
    ),
  },
  {
    title: '什么是VPS？和虚拟主机有何不同。',
    Svg: require('@site/static/img/vpsc01.svg').default,
    description: (
      <>
        VPS是Virtual Private Server的缩写，翻译过来为虚拟专用服务器。它是把一台服务器分割成多个虚拟专享服务器的优质服务，相对于虚拟主机来说，性能更好，安全性更高，可控制权限更多。

        简单来说就是VPS比虚拟主机用着更舒服，但是也需要花比虚拟主机更多一些的精力来管理，只要你电脑水平还OK，那么2024年了，玩转基本的VPS操作不难。
      </>
    ),
  },
  {
    title: 'VPS服务器选择国内的还是国外的？',
    Svg: require('@site/static/img/vpsc02.svg').default,
    description: (
      <>
        因为国情原因，这个是需要考虑的一个问题，使用国内VPS服务器建网站都需要备案，国外VPS服务器则不用备案。奶爸的建议就是，如果你网站用户主要面向国外，那么肯定选择国外VPS（例如外贸网站），如果你的网站客户是国内用户，你对备案不反感，国内VPS价格也能接受，那么优先考虑国内VPS。如果你对备案反感，而且对价格敏感，那么可以考虑国外VPS。<br />

        提醒的是：网站规划是正规网站，用户是国内用户，你又准备盈利的那种，没得选，肯定国内VPS，因为政策影响，国内很多服务你不备案用不了，例如微信小程序。然后就是备案不麻烦，但是备案绑定服务商，更换到别家服务商需要重新备案，所以一定一开始就找稳定的VPS服务商购买服务。
      </>
    ),
  },
  {
    title: '如何选择VPS最好？',
    Svg: require('@site/static/img/vpsc03.svg').default,
    description: (
      <>
        当你打算购买一台VPS来安装网站时，一定要明白一个道理：一分钱一分货。<br />

        购买VPS，主要考虑以下几个问题：<br />

        1. 硬件配置，推荐1H1G起步，带宽国内比较小，1M起步（国外通常100M）；<br />
        2. 稳定性，服务器在线时间通常都是99%以上，服务器不稳定的不要买；<br />
        3. 安全性，一方面是服务商技术安全方面，另外一个是服务商会不会跑路；<br />
        4. 服务器位置，外贸网站千万别买国内服务器；<br />
        5. 客户支持，好的服务商会在你碰到问题时给你提供解决思路或者教程，差的服务商可能半年都没人回复你的工单。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
