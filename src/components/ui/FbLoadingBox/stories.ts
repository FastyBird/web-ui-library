import {
  Args,
  Meta,
  Story,
} from '@storybook/vue3'

import {
  FbUiVariantTypes,
  FbSizeTypes,
} from '@/types'

import { IFbUiLoadingBoxProps } from './types'
import FbUiLoadingBox from './index.vue'

export default {
  component: FbUiLoadingBox,
  title: 'Components/Ui/FB Loading box',
  argTypes: {
    default: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: 'Loading & preparing content...',
      description: 'Loading info text slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    icon: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: null,
      description: 'Optional loading icon slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    variant: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: FbUiVariantTypes.PRIMARY,
      options: [
        FbUiVariantTypes.DEFAULT,
        FbUiVariantTypes.PRIMARY,
        FbUiVariantTypes.SUCCESS,
        FbUiVariantTypes.DANGER,
        FbUiVariantTypes.WARNING,
        FbUiVariantTypes.INFO,
      ],
      description: 'Spinner color variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbUiVariantTypes.PRIMARY },
      },
    },
    size: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: FbSizeTypes.MEDIUM,
      options: [
        FbSizeTypes.SMALL,
        FbSizeTypes.MEDIUM,
        FbSizeTypes.LARGE,
      ],
      description: 'Spinner size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbSizeTypes.MEDIUM },
      },
    },
    fullScreen: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      defaultValue: false,
    },
    animation: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  parameters: {
    controls: { disabled: true },
    actions: { disabled: true },
  },
} as Meta

interface TemplateArgs extends IFbUiLoadingBoxProps, Args {
  default?: string
  icon?: string
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    components: { FbUiLoadingBox },
    setup(): any {
      return { args }
    },
    template: `
      <fb-ui-loading-box
        :variant="args.variant"
        :size="args.size"
        :fullScreen="args.fullScreen"
        :animation="args.animation"
      >
        <template v-if="${args.default !== null && typeof args.default !== 'undefined'}" #default>${args.default}</template>
        <template v-if="${args.icon !== null && typeof args.icon !== 'undefined'}" #icon>${args.icon}</template>
      </fb-ui-loading-box>
    `,
  }
}

export const Default = Template.bind({})

export const WithIcon = Template.bind({})

WithIcon.args = {
  icon: `<font-awesome-icon icon="chart-bar" size="6x" />`,
}

export const WithCustomLogo: Story<TemplateArgs> = () => {
  return {
    components: { FbUiLoadingBox },
    template: `
      <fb-ui-loading-box
        variant="${FbUiVariantTypes.PRIMARY}"
        size="${FbSizeTypes.LARGE}"
        :animation="true"
        style="position: relative;"
      >
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28.4261 22.5599"
            height="200"
          >
            <g>
              <path
                style="fill: #d9230f;"
                d="M8.45174 5.71317c-0.348774,0 -0.631483,-0.282709 -0.631483,-0.63139 0,-0.348681 0.282709,-0.631483 0.631483,-0.631483 0.882511,0 1.75729,-0.00987712 2.64082,-0.00708171 0.136602,-0.899563 0.56048,-1.70501 1.175,-2.31945 0.679564,-0.679657 1.59273,-1.12608 2.60858,-1.20855 -0.114798,-0.224844 -0.0869373,-0.506342 0.0913167,-0.705655 0.231553,-0.258762 0.629247,-0.280846 0.888009,-0.0492924l1.42808 1.27722 0.02637 0.0251587c0.31495,0.182727 0.603622,0.405428 0.859402,0.661115 0.272646,0.272553 0.507833,0.582843 0.696896,0.922206l1.436 1.33434c0.138932,0.1134 0.254755,0.300973 0.303768,0.465249l-1.54064 0c-0.179559,0 -0.327343,0.147691 -0.327343,0.327249l0 0.000279541c0,0.179465 0.147877,0.327343 0.327343,0.327343 0.500472,0 1.00085,0 1.50132,0 -0.0495719,0.114146 -0.138373,0.247767 -0.23351,0.328927l-1.48045 1.37571c-0.0272087,0.0252519 -0.055815,0.0474288 -0.0859123,0.0670898 -0.169961,0.273857 -0.370671,0.526562 -0.597472,0.753363 -0.75504,0.755227 -1.79847,1.22253 -2.95093,1.22253 -1.0781,0 -2.13895,-0.575109 -3.12415,-1.31571l1.39165 0c0.612568,0 1.10959,-0.496931 1.10959,-1.10959 0,-0.612568 -0.497024,-1.10959 -1.10959,-1.10959 -1.67808,0 -3.35617,0 -5.03416,0zm7.74394 2.10373c0.410553,-0.146293 0.778801,-0.382226 1.0808,-0.684223 0.526655,-0.526469 0.852414,-1.2543 0.852414,-2.05798 0,-0.80368 -0.325758,-1.53151 -0.852414,-2.05807 -0.526562,-0.526562 -1.2543,-0.852414 -2.05807,-0.852414 -0.80368,0 -1.53151,0.325852 -2.05798,0.852414 -0.385394,0.385487 -0.663258,0.878784 -0.784485,1.43069 0.439625,0.00130452 0.878784,0.00298177 1.31841,0.00298177 1.20128,0 2.05258,0.689162 2.4376,1.51912 0.26575,0.573432 0.318211,1.26082 0.0637354,1.84749zm1.17081 -3.43733c0,-0.382878 -0.310384,-0.693355 -0.693355,-0.693355 -0.382878,0 -0.693262,0.310477 -0.693262,0.693355 0,0.382878 0.310384,0.693355 0.693262,0.693355 0.382971,0 0.693355,-0.310477 0.693355,-0.693355zm-3.88059 1.8118c0.348681,0 0.63139,0.282709 0.63139,0.63139 0,0.348681 -0.282709,0.631483 -0.63139,0.631483l-3.43183 0c-0.348681,0 -0.631483,-0.282802 -0.631483,-0.631483 0,-0.348681 0.282802,-0.63139 0.631483,-0.63139l3.43183 0z"
              />
              <path
                style="fill: #444;"
                d="M5.2167 21.1063c-0.0192883,0.0891736 -0.0326131,0.179652 -0.039788,0.271248 -0.00726807,0.0915963 -0.0109021,0.177136 -0.0109021,0.256712 0,0.036154 0,0.0705375 0,0.103057 0,0.0325199 0.00242269,0.0620581 0.00726807,0.0886145l-0.202481 0 -0.0505969 -0.31467 -0.0145361 0c-0.0288859,0.0409994 -0.0644808,0.082651 -0.106598,0.124768 -0.0422107,0.0422107 -0.0886145,0.0801351 -0.139211,0.11396 -0.0506901,0.0337313 -0.104921,0.0608468 -0.162786,0.0813464 -0.057865,0.0204997 -0.119271,0.0307495 -0.184404,0.0307495 -0.286809,0 -0.430307,-0.186827 -0.430307,-0.56048 0,-0.154307 0.0199406,-0.311036 0.0597286,-0.470095 0.0396948,-0.159152 0.101194,-0.302557 0.184404,-0.430307 0.0831169,-0.12775 0.190367,-0.232578 0.321752,-0.314577 0.131384,-0.0819987 0.289884,-0.122905 0.475499,-0.122905 0.0675558,0 0.150114,0.00782715 0.247767,0.0234814 0.0975598,0.0156543 0.188597,0.0367131 0.272925,0.0632695l-0.227733 1.05583zm-0.820826 0.524326c0.057865,0 0.113307,-0.0138839 0.166327,-0.0415584 0.0530196,-0.0277677 0.103057,-0.0620581 0.15002,-0.103057 0.0470561,-0.0409994 0.0886145,-0.0849805 0.124768,-0.132037 0.036154,-0.0469629 0.0651331,-0.090944 0.0867509,-0.131943l0.202574 -0.976344c-0.0724011,-0.0337313 -0.163997,-0.0505969 -0.274882,-0.0505969 -0.110885,0 -0.208538,0.0325199 -0.292866,0.097653 -0.0843282,0.0650399 -0.155518,0.15002 -0.213383,0.254941 -0.0577718,0.104828 -0.101194,0.22354 -0.130173,0.356135 -0.0288859,0.132596 -0.0433289,0.265191 -0.0433289,0.397787 0,0.0915963 0.018077,0.169309 0.054231,0.23323 0.036154,0.0638285 0.0928076,0.0957894 0.169961,0.0957894zm1.34152 -1.61994l0.267614 0 0.075942 -0.357999 0.289232 -0.0831169 -0.094019 0.441116 0.473729 0 -0.054231 0.23146 -0.470095 0 -0.227826 1.09198c-0.0047522,0.0288859 -0.00903849,0.0554423 -0.0126725,0.079576 -0.00354085,0.0240405 -0.00540446,0.0457516 -0.00540446,0.0650399 0,0.057865 0.0133248,0.097653 0.039788,0.119364 0.0265564,0.021711 0.0663444,0.0325199 0.119364,0.0325199 0.057865,0 0.110885,-0.00726807 0.159059,-0.021711 0.0482674,-0.014443 0.0964417,-0.036154 0.144616,-0.0650399l0 0.220558c-0.0505969,0.0288859 -0.115637,0.0524605 -0.195213,0.0705375 -0.079576,0.018077 -0.155518,0.0271155 -0.227826,0.0271155 -0.219347,0 -0.32902,-0.100076 -0.32902,-0.300134 0,-0.0409994 0.00596354,-0.0915963 0.018077,-0.151884l0.245903 -1.16792 -0.271248 0 0.054231 -0.23146zm2.44431 1.17156l0.018077 0.34719 0.018077 0 0.137441 -0.350824 0.600268 -1.16792 0.289232 0 -0.853346 1.61267c-0.0627104,0.118153 -0.124768,0.23323 -0.186174,0.345326 -0.061499,0.112096 -0.124768,0.212172 -0.189902,0.300134 -0.0650399,0.0880554 -0.132596,0.1585 -0.202481,0.211519 -0.0698853,0.0531128 -0.142193,0.079576 -0.216924,0.079576 -0.0409994,0 -0.0765942,-0.00242269 -0.106691,-0.00717489 -0.0300973,-0.00484538 -0.0572127,-0.0133248 -0.0813464,-0.0253451l0.0867509 -0.249537c0.0265564,0.00969076 0.0554423,0.0145361 0.0868441,0.0145361 0.0698853,0 0.139771,-0.036154 0.209656,-0.108555 0.0699784,-0.0723079 0.14825,-0.194001 0.235094,-0.365174l-0.311036 -1.80798 0.289325 0 0.177136 1.17156zm1.0016 0.0723079c0,-0.190461 0.0246928,-0.364615 0.0741716,-0.522462 0.0493856,-0.157941 0.1175,-0.293518 0.204251,-0.406825 0.0868441,-0.113307 0.187479,-0.20127 0.301998,-0.26398 0.114519,-0.0626172 0.236771,-0.094019 0.366944,-0.094019 0.101287,0 0.187479,0.0163066 0.258575,0.0488265 0.0710966,0.0325199 0.128962,0.0771533 0.173595,0.133807 0.0445402,0.0566537 0.0765011,0.121694 0.0957894,0.195306 0.0192883,0.0735193 0.0289791,0.15002 0.0289791,0.229596 0,0.18077 -0.0235746,0.349519 -0.0705375,0.506249 -0.0470561,0.156636 -0.112096,0.292866 -0.195306,0.408596 -0.0831169,0.115637 -0.180118,0.206674 -0.291095,0.273018 -0.110885,0.0662512 -0.231367,0.0994234 -0.36154,0.0994234 -0.108462,0 -0.199499,-0.0175179 -0.273018,-0.0524605 -0.0735193,-0.0349426 -0.133807,-0.0813464 -0.18077,-0.139211 -0.0470561,-0.057865 -0.0807874,-0.122905 -0.101287,-0.195306 -0.0204997,-0.0723079 -0.0307495,-0.145827 -0.0307495,-0.220558zm0.289325 -0.0650399c0,0.142193 0.0264632,0.251307 0.079576,0.327249 0.0530196,0.075942 0.137348,0.113866 0.253078,0.113866 0.079576,0 0.154866,-0.0283268 0.225962,-0.0849805 0.0710966,-0.0566537 0.133807,-0.133155 0.188038,-0.229596 0.054231,-0.0964417 0.097653,-0.206674 0.130173,-0.330883 0.0325199,-0.124116 0.0488265,-0.25373 0.0488265,-0.388655 0,-0.122998 -0.0222701,-0.219999 -0.0669035,-0.291095 -0.0445402,-0.0710966 -0.129521,-0.106691 -0.254941,-0.106691 -0.0794828,0 -0.155425,0.0271155 -0.227733,0.0813464 -0.0724011,0.054231 -0.136882,0.127191 -0.193536,0.218787 -0.0565605,0.0915963 -0.101194,0.197076 -0.133714,0.316347 -0.0326131,0.119364 -0.0488265,0.244133 -0.0488265,0.374305zm2.10084 -1.17882l-0.253171 1.20408c-0.014443,0.0651331 -0.021711,0.125421 -0.021711,0.180863 0,0.0674626 0.0133248,0.123557 0.039788,0.168097 0.0265564,0.0446334 0.0747306,0.0669035 0.144709,0.0669035 0.0577718,0 0.116289,-0.014443 0.175365,-0.043422 0.0589832,-0.0288859 0.115637,-0.0662512 0.169961,-0.112096 0.054231,-0.0457516 0.103617,-0.0963485 0.14825,-0.151791 0.0445402,-0.0554423 0.0813464,-0.109766 0.110232,-0.162786l0.242269 -1.14985 0.271248 0 -0.227826 1.0739c-0.00969076,0.0409994 -0.0192883,0.0910372 -0.0289791,0.150114 -0.00959758,0.0590763 -0.0186361,0.121134 -0.0271155,0.186174 -0.00838623,0.0651331 -0.015002,0.128403 -0.0198474,0.189902 -0.00484538,0.0614058 -0.00726807,0.115078 -0.00726807,0.160922l0 0.0469629 -0.21329 0 0 -0.343556 -0.0145361 0c-0.036154,0.0482674 -0.0777124,0.0952303 -0.124675,0.141075 -0.0470561,0.0457516 -0.0988643,0.0867509 -0.155518,0.122905 -0.0566537,0.036154 -0.1175,0.0656921 -0.182633,0.0886145 -0.0650399,0.0229224 -0.133807,0.0343835 -0.206115,0.0343835 -0.0530196,0 -0.101846,-0.00605672 -0.146386,-0.018077 -0.0446334,-0.0121134 -0.0837691,-0.0331722 -0.1175,-0.0632695 -0.0338245,-0.0301904 -0.0602877,-0.0699784 -0.079576,-0.119364 -0.0192883,-0.0493856 -0.0289791,-0.112748 -0.0289791,-0.189808 0,-0.0844214 0.0121134,-0.179652 0.036154,-0.285691l0.245903 -1.17519 0.271248 0zm2.38654 0.238635c-0.021711,-0.00484538 -0.0439811,-0.00838623 -0.0669035,-0.0108089 -0.0229224,-0.00242269 -0.0439811,-0.00363403 -0.0632695,-0.00363403 -0.122998,0 -0.229037,0.0385767 -0.318211,0.11573 -0.0891736,0.0771533 -0.159152,0.171172 -0.209749,0.282057l-0.249537 1.186 -0.271155 0 0.383251 -1.80798 0.188038 0 0 0.310943 0.0145361 0c0.0288859,-0.0457516 0.0601945,-0.0885213 0.094019,-0.128309 0.0337313,-0.039788 0.0710966,-0.0753829 0.112096,-0.106691 0.0409062,-0.0313086 0.0855396,-0.0560946 0.133714,-0.0741716 0.0482674,-0.018077 0.101287,-0.0271155 0.159152,-0.0271155 0.0530196,0 0.108462,0.00847941 0.166327,0.0253451l-0.0723079 0.238635zm1.77546 1.05946c0,-0.0626172 -0.0156543,-0.115637 -0.0470561,-0.159059 -0.0313086,-0.043422 -0.0710966,-0.0825578 -0.119271,-0.1175 -0.0482674,-0.0349426 -0.100076,-0.0693262 -0.155518,-0.103057 -0.0554423,-0.0337313 -0.107251,-0.0717489 -0.155518,-0.11396 -0.0481742,-0.0421175 -0.0879622,-0.0915963 -0.119271,-0.14825 -0.0314018,-0.0566537 -0.0470561,-0.127098 -0.0470561,-0.211519 0,-0.0674626 0.0163066,-0.130732 0.0488265,-0.189808 0.0325199,-0.0590763 0.0771533,-0.110885 0.133807,-0.155518 0.0566537,-0.0445402 0.124116,-0.079576 0.202481,-0.104828 0.0783647,-0.0253451 0.163345,-0.0380176 0.254941,-0.0380176 0.12775,0 0.226615,0.00847941 0.2965,0.0253451 0.0698853,0.0168656 0.132596,0.0409994 0.188038,0.0723079l-0.0903849 0.216924c-0.0964417,-0.0554423 -0.227826,-0.0831169 -0.394153,-0.0831169 -0.101287,0 -0.185056,0.0210588 -0.251307,0.0632695 -0.0663444,0.0422107 -0.0994234,0.106691 -0.0994234,0.193442 0,0.0505969 0.0156543,0.0946712 0.0469629,0.132037 0.0314018,0.0373653 0.0710966,0.072867 0.119364,0.106598 0.0481742,0.0338245 0.0999825,0.0681148 0.155425,0.103057 0.0555355,0.0349426 0.107344,0.0747306 0.155518,0.119364 0.0482674,0.0446334 0.0879622,0.0970007 0.119364,0.157288 0.0313086,0.0602877 0.0469629,0.131384 0.0469629,0.213383 0,0.187945 -0.0632695,0.33079 -0.189808,0.428443 -0.126539,0.097653 -0.295941,0.14648 -0.508019,0.14648 -0.108555,0 -0.207979,-0.0109021 -0.298363,-0.0326131 -0.0903849,-0.0216178 -0.163345,-0.0493856 -0.218787,-0.0831169l0.101287 -0.227826c0.0481742,0.0313086 0.111537,0.057865 0.189808,0.079576 0.0783647,0.021711 0.159711,0.0325199 0.244133,0.0325199 0.118059,0 0.212731,-0.0259041 0.283827,-0.0777124 0.0710966,-0.0518083 0.106691,-0.133248 0.106691,-0.244133zm1.90927 0.332747c-0.0844214,0.0723079 -0.183845,0.127098 -0.298363,0.164463 -0.114519,0.0373653 -0.229596,0.0560946 -0.345326,0.0560946 -0.192883,0 -0.338058,-0.0554423 -0.435711,-0.166327 -0.097653,-0.110885 -0.14648,-0.265191 -0.14648,-0.46292 0,-0.197636 0.0277677,-0.374771 0.08321,-0.531501 0.0554423,-0.156729 0.128309,-0.289325 0.218787,-0.397787 0.0903849,-0.108462 0.19279,-0.191579 0.307309,-0.249444 0.114519,-0.057865 0.232019,-0.0868441 0.352594,-0.0868441 0.0867509,0 0.162041,0.0121134 0.225962,0.036154 0.0639217,0.0241337 0.116289,0.0560946 0.157288,0.0958826 0.0409994,0.039788 0.0710966,0.0855396 0.0903849,0.137348 0.0192883,0.0519015 0.0289791,0.106691 0.0289791,0.164556 0,0.171172 -0.08321,0.305538 -0.249537,0.403191 -0.166327,0.097653 -0.408596,0.14648 -0.726807,0.14648 -0.0288859,0 -0.0590763,-0.000652262 -0.0903849,-0.00186361 -0.0313086,-0.00121134 -0.0639217,-0.00298177 -0.097653,-0.00540446 -0.00959758,0.0457516 -0.0168656,0.0891736 -0.021711,0.130173 -0.0047522,0.0409994 -0.00717489,0.0771533 -0.00717489,0.108462 0,0.132596 0.0300973,0.240498 0.0903849,0.323615 0.0602877,0.08321 0.154307,0.124768 0.282057,0.124768 0.106039,0 0.20304,-0.0174247 0.291095,-0.0524605 0.0879622,-0.0349426 0.156077,-0.0716557 0.204251,-0.110232l0.0868441 0.173595zm-0.307402 -1.4428c-0.132596,0 -0.247673,0.0451925 -0.345326,0.135577 -0.097653,0.0903849 -0.171731,0.226056 -0.222421,0.406825 0.0916895,0 0.186827,-0.00242269 0.285691,-0.00726807 0.0988643,-0.00484538 0.18869,-0.0174247 0.269384,-0.0379244 0.0807874,-0.0204997 0.147691,-0.0530196 0.20071,-0.097653 0.0530196,-0.0446334 0.079576,-0.106691 0.079576,-0.186268 0,-0.0240405 -0.0042863,-0.0487333 -0.0126725,-0.0740784 -0.00847941,-0.0253451 -0.0222701,-0.0481742 -0.0415584,-0.0686739 -0.0192883,-0.0204997 -0.0464038,-0.0373653 -0.0814396,-0.0506901 -0.0349426,-0.0132316 -0.0789238,-0.0198474 -0.131943,-0.0198474zm1.88392 0.0505969c-0.021711,-0.00484538 -0.0439811,-0.00838623 -0.0669035,-0.0108089 -0.0229224,-0.00242269 -0.0439811,-0.00363403 -0.0632695,-0.00363403 -0.122998,0 -0.229037,0.0385767 -0.318211,0.11573 -0.0891736,0.0771533 -0.159152,0.171172 -0.209749,0.282057l-0.249537 1.186 -0.271155 0 0.383251 -1.80798 0.188038 0 0 0.310943 0.0145361 0c0.0288859,-0.0457516 0.0601945,-0.0885213 0.094019,-0.128309 0.0337313,-0.039788 0.0710966,-0.0753829 0.112096,-0.106691 0.0409062,-0.0313086 0.0855396,-0.0560946 0.133714,-0.0741716 0.0482674,-0.018077 0.101287,-0.0271155 0.159152,-0.0271155 0.0530196,0 0.108462,0.00847941 0.166327,0.0253451l-0.0723079 0.238635zm0.567748 0.820826l0.0325199 0.343556 0.00726807 0 0.155425 -0.350731 0.611077 -1.05229 0.311036 0 -1.12823 1.84777 -0.115637 0 -0.350824 -1.84777 0.289325 0 0.188038 1.05946zm1.50058 -1.05946l0.271155 0 -0.383251 1.80798 -0.271155 0 0.383251 -1.80798zm0.057865 -0.553212c0,-0.0554423 0.0186361,-0.102498 0.0560014,-0.141075 0.0373653,-0.0385767 0.0837691,-0.057865 0.139211,-0.057865 0.0554423,0 0.102498,0.0192883 0.141075,0.057865 0.0385767,0.0385767 0.057865,0.0856327 0.057865,0.141075 0,0.0554423 -0.0192883,0.101846 -0.057865,0.139211 -0.0385767,0.0373653 -0.0856327,0.0560014 -0.141075,0.0560014 -0.0554423,0 -0.101846,-0.0186361 -0.139211,-0.0560014 -0.0373653,-0.0373653 -0.0560014,-0.0837691 -0.0560014,-0.139211zm1.61994 2.20567c-0.036154,0.0314018 -0.0777124,0.0590763 -0.124768,0.08321 -0.0469629,0.0241337 -0.0952303,0.0445402 -0.144616,0.061499 -0.0493856,0.0168656 -0.0982121,0.0300973 -0.14648,0.0396948 -0.0481742,0.00969076 -0.0939258,0.0145361 -0.137348,0.0145361 -0.118153,0 -0.215153,-0.0187292 -0.291095,-0.0560946 -0.075942,-0.0373653 -0.135577,-0.0849805 -0.178999,-0.142845 -0.043422,-0.057865 -0.0735193,-0.120482 -0.0903849,-0.188038 -0.0168656,-0.0674626 -0.0253451,-0.131384 -0.0253451,-0.191579 0,-0.204904 0.0277677,-0.388748 0.08321,-0.551441 0.0554423,-0.162693 0.129521,-0.300786 0.222328,-0.414 0.0928076,-0.113307 0.199499,-0.200151 0.320074,-0.260439 0.120482,-0.0601945 0.244692,-0.0903849 0.372442,-0.0903849 0.0915963,0 0.166886,0.00847941 0.225962,0.0253451 0.0590763,0.0168656 0.112748,0.036154 0.160922,0.057865l-0.101287 0.224192c-0.0409062,-0.0241337 -0.0915963,-0.0427698 -0.151791,-0.0560946 -0.0602877,-0.0132316 -0.125421,-0.0198474 -0.195306,-0.0198474 -0.0819987,0 -0.162134,0.0276746 -0.240498,0.0831169 -0.0782715,0.0554423 -0.147598,0.128403 -0.207885,0.218787 -0.0602877,0.0903849 -0.108462,0.194095 -0.144616,0.311036 -0.036154,0.116848 -0.054231,0.236771 -0.054231,0.359769 0,0.156636 0.0325199,0.272366 0.097653,0.347097 0.0650399,0.0747306 0.153002,0.112096 0.263887,0.112096 0.0723079,0 0.14825,-0.0163066 0.227826,-0.0488265 0.079576,-0.0325199 0.143405,-0.0656921 0.191672,-0.0994234l0.0686739 0.18077zm1.50076 -0.0216178c-0.0844214,0.0723079 -0.183845,0.127098 -0.298363,0.164463 -0.114519,0.0373653 -0.229596,0.0560946 -0.345326,0.0560946 -0.192883,0 -0.338058,-0.0554423 -0.435711,-0.166327 -0.097653,-0.110885 -0.14648,-0.265191 -0.14648,-0.46292 0,-0.197636 0.0277677,-0.374771 0.08321,-0.531501 0.0554423,-0.156729 0.128309,-0.289325 0.218787,-0.397787 0.0903849,-0.108462 0.19279,-0.191579 0.307309,-0.249444 0.114519,-0.057865 0.232019,-0.0868441 0.352594,-0.0868441 0.0867509,0 0.162041,0.0121134 0.225962,0.036154 0.0639217,0.0241337 0.116289,0.0560946 0.157288,0.0958826 0.0409994,0.039788 0.0710966,0.0855396 0.0903849,0.137348 0.0192883,0.0519015 0.0289791,0.106691 0.0289791,0.164556 0,0.171172 -0.08321,0.305538 -0.249537,0.403191 -0.166327,0.097653 -0.408596,0.14648 -0.726807,0.14648 -0.0288859,0 -0.0590763,-0.000652262 -0.0903849,-0.00186361 -0.0313086,-0.00121134 -0.0639217,-0.00298177 -0.097653,-0.00540446 -0.00959758,0.0457516 -0.0168656,0.0891736 -0.021711,0.130173 -0.0047522,0.0409994 -0.00717489,0.0771533 -0.00717489,0.108462 0,0.132596 0.0300973,0.240498 0.0903849,0.323615 0.0602877,0.08321 0.154307,0.124768 0.282057,0.124768 0.106039,0 0.20304,-0.0174247 0.291095,-0.0524605 0.0879622,-0.0349426 0.156077,-0.0716557 0.204251,-0.110232l0.0868441 0.173595zm-0.307402 -1.4428c-0.132596,0 -0.247673,0.0451925 -0.345326,0.135577 -0.097653,0.0903849 -0.171731,0.226056 -0.222421,0.406825 0.0916895,0 0.186827,-0.00242269 0.285691,-0.00726807 0.0988643,-0.00484538 0.18869,-0.0174247 0.269384,-0.0379244 0.0807874,-0.0204997 0.147691,-0.0530196 0.20071,-0.097653 0.0530196,-0.0446334 0.079576,-0.106691 0.079576,-0.186268 0,-0.0240405 -0.0042863,-0.0487333 -0.0126725,-0.0740784 -0.00847941,-0.0253451 -0.0222701,-0.0481742 -0.0415584,-0.0686739 -0.0192883,-0.0204997 -0.0464038,-0.0373653 -0.0814396,-0.0506901 -0.0349426,-0.0132316 -0.0789238,-0.0198474 -0.131943,-0.0198474z"
              />
              <g>
                <path
                  style="fill: #444;"
                  d="M3.11204 14.4841l-1.30527 0 -0.707984 2.7286 -1.09878 0 1.16513 -4.46893c-0.167166,0.0983053 -0.363776,0.147504 -0.589925,0.147504 -0.0737988,0 -0.149927,-0.00493856 -0.228665,-0.0147225l0.184404 -0.707984c0.0639217,0.00978394 0.125328,0.0147225 0.184404,0.0147225 0.319515,0 0.562902,-0.167166 0.730068,-0.501497l2.89073 0 -0.22121 0.759606 -1.77723 0 -0.331908 1.27583 1.32745 0 -0.22121 0.766874zm0.72047 2.72124c-0.39816,-0.172104 -0.597286,-0.567841 -0.597286,-1.1873 0,-0.344115 0.0737057,-0.688323 0.22121,-1.03244 0.162227,-0.383437 0.38353,-0.696896 0.663724,-0.94019 0.280193,-0.243387 0.56048,-0.365081 0.840673,-0.365081 0.275348,0 0.494135,0.113028 0.656362,0.33927l0.0810669 -0.30237 0.995539 0 -0.641547 2.47776c-0.00978394,0.0344767 -0.0147225,0.0664376 -0.0147225,0.0958826 0,0.0983053 0.0565605,0.147504 0.169588,0.147504 0.0639217,0 0.135205,-0.0147225 0.213849,-0.0442607l-0.184311 0.649001c-0.255687,0.172011 -0.49162,0.25811 -0.707984,0.25811 -0.24581,0 -0.452297,-0.110605 -0.619463,-0.331908 -0.255594,0.196704 -0.508858,0.295009 -0.759606,0.295009 -0.113028,0 -0.218694,-0.0196611 -0.317093,-0.0589832zm1.23156 -2.73596c-0.117966,0 -0.244598,0.0737988 -0.379803,0.22121 -0.135205,0.147504 -0.247021,0.341692 -0.335542,0.582657 -0.0835828,0.22121 -0.125328,0.435059 -0.125328,0.641547 0,0.329393 0.0860055,0.494135 0.25811,0.494135 0.113028,0 0.238449,-0.0787374 0.376076,-0.236026 0.137627,-0.157288 0.250748,-0.358931 0.33927,-0.60474 0.0884281,-0.22121 0.132689,-0.43012 0.132689,-0.626824 0,-0.314577 -0.0885213,-0.471958 -0.265471,-0.471958zm4.53313 0.243387c-0.280193,-0.201549 -0.609586,-0.30237 -0.988178,-0.30237 -0.0835828,0 -0.167166,0.0270223 -0.250748,0.0811601 -0.0835828,0.0540446 -0.125328,0.120389 -0.125328,0.199033 0,0.0787374 0.105667,0.172104 0.317093,0.280286 0.295009,0.147504 0.49162,0.260532 0.589925,0.339176 0.206488,0.172104 0.309731,0.378592 0.309731,0.619463 0,0.417914 -0.14005,0.753456 -0.420337,1.00663 -0.280193,0.253171 -0.631763,0.379803 -1.05452,0.379803 -0.142566,0 -0.344115,-0.0295382 -0.60474,-0.0885213 -0.285132,-0.0589832 -0.469443,-0.120389 -0.553025,-0.184311l0.206488 -0.818589c0.270409,0.157288 0.594863,0.236026 0.973362,0.236026 0.324547,0 0.486774,-0.0910372 0.486774,-0.272925 0,-0.137627 -0.0970939,-0.260532 -0.291282,-0.368715 -0.194188,-0.108182 -0.387164,-0.213849 -0.578929,-0.317093 -0.201549,-0.152443 -0.30237,-0.344115 -0.30237,-0.575202 0,-0.378592 0.147504,-0.695684 0.442513,-0.951278 0.280193,-0.240964 0.612102,-0.361353 0.995539,-0.361353 0.437575,0 0.789051,0.090944 1.05452,0.272832l-0.206488 0.825951zm1.30313 2.49994l-1.01772 0 0.707984 -2.7286 -0.464597 0 0.199126 -0.759513 0.464597 0 0.398253 -1.51176 1.01762 0 -0.390798 1.51176 0.641547 0 -0.206488 0.759513 -0.634185 0 -0.715346 2.7286zm3.10253 0c-0.211333,0.344115 -0.353899,0.565418 -0.427698,0.663724 -0.15235,0.201549 -0.339176,0.378499 -0.56048,0.530942 -0.29007,0.201549 -0.572686,0.30237 -0.848034,0.30237 -0.417914,-0.0196611 -0.624402,-0.152443 -0.619463,-0.398253l0.47932 -0.663724c0.00493856,0.0983984 0.0762215,0.145082 0.213849,0.140143 0.231087,-0.0196611 0.479413,-0.211426 0.744884,-0.575202l-0.33927 -3.49547 1.01772 0 0.199126 2.05006 1.25365 -2.0427 1.01762 0 -2.13122 3.48811z"
                />
                <path
                  style="fill: #d9230f;"
                  d="M17.7543 14.7054l0.16232 -0.671085c0.0441675,0.00493856 0.0737057,0.00736125 0.0884281,0.00736125 0.0934599,0 0.147504,0 0.162227,0 0.481836,-0.0343835 0.771906,-0.30237 0.870211,-0.803867 0.00987712,-0.049106 0.0147225,-0.0933667 0.0147225,-0.132689 0,-0.265471 -0.105667,-0.457236 -0.317093,-0.575202 -0.15235,-0.0885213 -0.312154,-0.122905 -0.47932,-0.103244 -0.0589832,0.0147225 -0.100728,0.0196611 -0.125328,0.0147225l-1.24629 4.7713 -1.17258 0 1.16522 -4.46893c-0.167166,0.0983053 -0.363869,0.147504 -0.590018,0.147504 -0.0737057,0 -0.149927,-0.00493856 -0.228571,-0.0147225l0.184311 -0.707984c0.0639217,0.00978394 0.125421,0.0147225 0.184404,0.0147225 0.319515,0 0.562902,-0.167166 0.730068,-0.501497l0.951278 -0.00736125c0.825951,-0.00978394 1.39873,0.209004 1.71825,0.656362 0.16232,0.206488 0.243387,0.444936 0.243387,0.715346 0,0.255594 -0.0688603,0.502708 -0.206488,0.741156 -0.137627,0.238355 -0.319515,0.426486 -0.545664,0.564114 0.319515,0.265471 0.47932,0.626824 0.47932,1.08406 0,0.275255 -0.0663444,0.553025 -0.199126,0.833312 -0.157288,0.324454 -0.367503,0.575202 -0.630551,0.752152 -0.262955,0.177043 -0.537092,0.265471 -0.822223,0.265471 -0.201549,0 -0.393314,-0.0441675 -0.575202,-0.132689 -0.0540446,-0.0245996 -0.189249,-0.0934599 -0.405614,-0.206488l0.199126 -0.811228c0.0393221,0.0442607 0.0835828,0.0835828 0.132782,0.118059 0.113028,0.0834896 0.23351,0.130266 0.36126,0.14005 0.0394153,0.0148157 0.0885213,0.0221769 0.147504,0.0221769 0.157382,0 0.312247,-0.0565605 0.464597,-0.169681 0.177043,-0.137627 0.287648,-0.317093 0.331908,-0.538303 0.0147225,-0.0835828 0.0220837,-0.159804 0.0220837,-0.228571 0,-0.319609 -0.154866,-0.540819 -0.464597,-0.663724 -0.172104,-0.0688603 -0.373653,-0.100821 -0.60474,-0.0958826l0.00745443 -0.0147225 -0.00745443 0zm4.28248 -0.988178l-0.914379 3.50284 -1.01772 0 0.914472 -3.50284 1.01762 0zm-0.235933 -0.567841c-0.167166,0.00493856 -0.309731,-0.0331722 -0.427791,-0.114332 -0.117966,-0.0811601 -0.176949,-0.183099 -0.176949,-0.306004 0,-0.122905 0.0589832,-0.229876 0.176949,-0.32082 0.118059,-0.090944 0.260625,-0.138932 0.427791,-0.143777 0.167166,-0.00493856 0.309731,0.0331722 0.427698,0.114239 0.117966,0.0811601 0.176949,0.183193 0.176949,0.306097 0,0.122905 -0.0589832,0.229783 -0.176949,0.320727 -0.117966,0.0910372 -0.260532,0.138932 -0.427698,0.14387zm2.85178 0.626824l-0.228665 0.958639c-0.12775,-0.0737057 -0.248232,-0.110605 -0.361353,-0.110605 -0.260532,0 -0.464597,0.179465 -0.612009,0.538396l-0.553119 2.05006 -1.01772 0 0.936556 -3.48075 1.01772 0 -0.0589832 0.22121c0.240871,-0.15235 0.459659,-0.228571 0.656269,-0.228571 0.0885213,0 0.16232,0.0171452 0.221303,0.0516219zm0.410739 3.41441c-0.388469,-0.167166 -0.582657,-0.558057 -0.582657,-1.17258 0,-0.33927 0.071283,-0.678446 0.213849,-1.01772 0.167166,-0.388376 0.38968,-0.701741 0.667451,-0.94019 0.277771,-0.238449 0.55433,-0.357719 0.829585,-0.357719 0.280286,0 0.501497,0.122905 0.663724,0.368808l0.553119 -2.09441 1.01762 0 -1.37161 5.2359 -1.02508 0 0.0663444 -0.228571c-0.24581,0.176949 -0.486681,0.265471 -0.722707,0.265471 -0.108089,0 -0.211333,-0.0196611 -0.309638,-0.0589832zm1.17249 -2.70652c-0.265471,0 -0.49162,0.248326 -0.678446,0.744884 -0.0835828,0.226149 -0.125328,0.44242 -0.125328,0.648908 0,0.344208 0.0933667,0.516219 0.280193,0.516219 0.122905,0 0.253171,-0.0762215 0.390892,-0.228571 0.137627,-0.152443 0.250655,-0.349054 0.339176,-0.590018 0.0786442,-0.201549 0.117966,-0.390798 0.117966,-0.567748 0,-0.349147 -0.108089,-0.523674 -0.324454,-0.523674z"
                />
              </g>
            </g>
          </svg>
        </template>
      </fb-ui-loading-box>
    `,
  }
}
