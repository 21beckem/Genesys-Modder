const TicketBtn = document.querySelector('DIV.interaction-controls  DIV[role=tablist] BUTTON[aria-label=Notes]')
const TicketBody = document.querySelector('DIV.notes-body:has( textarea#interaction-notes)')

if (!TicketBtn) {
    alert("There was an error finding the button to overwrite. Please try again.");
}
if (!TicketBody) {
    alert("There was an error finding the panel to overwrite. Please try again.");
}

const sidebar = document.querySelector('UL.navigation-action-bar');
let newLiBtn = document.createElement('LI');
newLiBtn.classList.add('action-item');
newLiBtn.style.overflow = 'hidden';
newLiBtn.innerHTML = `<a href="javascript:alert('Ticket')">

    <div style="transform: translate(3px,1px) rotate(-45deg);">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="482" height="360" style="scale: 0.09">
            <defs><mask id="TicketHoleMask">
                <rect width="100%" height="100%" fill="white" transform="translate(-50,0)"></rect>
                <path d="M0 0 C0.78846205 -0.00623996 1.57692411 -0.01247993 2.38927895 -0.01890898 C5.01634415 -0.0347916 7.64247536 -0.02225366 10.26954651 -0.00964355 C12.15905801 -0.01506683 14.04856529 -0.02219064 15.93806458 -0.03088379 C21.06003044 -0.04909681 26.18167349 -0.04205756 31.3036449 -0.02936745 C36.66908295 -0.01922787 42.0344937 -0.02863593 47.39993286 -0.03491211 C56.41072034 -0.04218634 65.42137662 -0.03260731 74.43214417 -0.0135498 C84.84152035 0.00821185 95.25058305 0.00117173 105.65995163 -0.02085543 C114.60454468 -0.03902366 123.54904351 -0.04156057 132.49364907 -0.03110075 C137.83259438 -0.02487282 143.1713925 -0.02401085 148.51032829 -0.0372467 C153.53128053 -0.048825 158.55182981 -0.04074317 163.57273865 -0.01766968 C165.41253046 -0.01239289 167.25235634 -0.01387868 169.09213448 -0.02272034 C171.60956536 -0.03370066 174.1257164 -0.0198832 176.64306641 0 C177.36594186 -0.00892289 178.08881731 -0.01784577 178.83359808 -0.02703905 C184.21360912 0.05501721 188.37611725 1.55723529 192.88502502 4.50793457 C196.52198952 8.43202784 199.12671594 11.69488188 199.16590881 17.12928772 C199.1773291 18.07817368 199.18874939 19.02705963 199.20051575 20.00469971 C199.20386932 21.56393158 199.20386932 21.56393158 199.20729065 23.15466309 C199.22218536 24.79908638 199.22218536 24.79908638 199.23738098 26.47673035 C199.26665337 30.1134592 199.28023552 33.75001337 199.29127502 37.38684082 C199.30277889 39.91450506 199.31429435 42.44216924 199.32582092 44.96983337 C199.34416228 49.59827805 199.35675718 54.22667034 199.36281443 58.85514218 C199.37175557 65.64889451 199.40675332 72.44183795 199.46481562 79.23534447 C199.51345248 85.13263595 199.52871271 91.02972861 199.53216553 96.92722893 C199.53820526 99.42819549 199.55421746 101.92915921 199.58053589 104.42999458 C199.61481727 107.9390918 199.6108589 111.44624557 199.59791565 114.95544434 C199.61634521 115.98076263 199.63477478 117.00608093 199.65376282 118.06246948 C199.56961143 125.38055868 197.69706261 130.8866967 192.88502502 136.50793457 C187.34299155 140.38424012 182.77229633 140.65677371 176.15531921 140.65510559 C175.37209286 140.65878228 174.5888665 140.66245897 173.78190601 140.66624707 C171.1549768 140.6772685 168.52808716 140.68112509 165.90113831 140.68493652 C164.01868057 140.69120219 162.13622407 140.69784908 160.25376892 140.70484924 C154.07096719 140.72587442 147.88816525 140.73624809 141.70533752 140.74621582 C139.57695884 140.75026352 137.44858029 140.75438045 135.32020187 140.7585659 C125.32385628 140.77761175 115.32751805 140.79184579 105.3311578 140.80017787 C93.788448 140.80995771 82.24592958 140.83629928 70.70328724 140.87667876 C61.7825905 140.90681655 52.86194872 140.92164441 43.94120204 140.92495888 C38.61230214 140.92731144 33.28360685 140.93629914 27.95476151 140.96142006 C22.94293259 140.98466575 17.93144355 140.9889481 12.91957474 140.97865868 C11.08053966 140.9781624 9.24148804 140.98450975 7.40250397 140.99821472 C4.89082678 141.01588541 2.38037583 141.00885193 -0.13130188 140.99568176 C-0.85815843 141.00665101 -1.58501497 141.01762025 -2.33389747 141.0289219 C-8.30029896 140.95344247 -11.82411032 138.78439127 -15.97825623 134.65637207 C-16.45649841 134.0711377 -16.9347406 133.48590332 -17.42747498 132.88293457 C-17.91860779 132.29254395 -18.4097406 131.70215332 -18.91575623 131.09387207 C-21.03971186 128.28499263 -21.24682568 126.46445814 -21.27560425 123.00010681 C-21.28564987 122.05115036 -21.2956955 121.10219391 -21.30604553 120.1244812 C-21.31187653 119.07982697 -21.31770752 118.03517273 -21.32371521 116.9588623 C-21.33349899 115.86111984 -21.34328278 114.76337738 -21.35336304 113.63237 C-21.38337007 109.98543518 -21.40472035 106.33853728 -21.42356873 102.69152832 C-21.43014055 101.44688372 -21.43671238 100.20223911 -21.44348335 98.91987801 C-21.46938479 93.68617063 -21.49287224 88.4524687 -21.50797939 83.21871853 C-21.5298495 75.73048436 -21.57173216 68.24297061 -21.64141697 60.75502437 C-21.69451373 54.84761101 -21.71447945 48.94035522 -21.72317696 43.03270149 C-21.73173146 40.52531417 -21.75054913 38.01793965 -21.77992058 35.51070976 C-21.81888861 31.99416333 -21.81986133 28.47948016 -21.81199646 24.96276855 C-21.83199707 23.93228394 -21.85199768 22.90179932 -21.87260437 21.84008789 C-21.80199549 14.7837118 -20.21831411 9.57264618 -15.11497498 4.50793457 C-10.02712059 0.98306171 -6.21525605 -0.07648263 0 0 Z M-0.11497498 20.50793457 C-0.11497498 53.17793457 -0.11497498 85.84793457 -0.11497498 119.50793457 C58.95502502 119.50793457 118.02502502 119.50793457 178.88502502 119.50793457 C178.88502502 86.83793457 178.88502502 54.16793457 178.88502502 20.50793457 C119.81502502 20.50793457 60.74502502 20.50793457 -0.11497498 20.50793457 Z " fill="black" transform="translate(30, 40)"></path>
            </mask></defs>
            <path d="M0 0 C1.65139162 -0.00679667 1.65139162 -0.00679667 3.33614469 -0.01373065 C7.01460578 -0.02636183 10.69291858 -0.02475507 14.37139893 -0.02310181 C17.01317898 -0.02908786 19.65494755 -0.03583732 22.29672241 -0.04345703 C28.72193063 -0.06003423 35.14710215 -0.06556509 41.57232997 -0.06668179 C46.79801419 -0.06763384 52.02368635 -0.07175195 57.24936676 -0.07808304 C72.08245241 -0.09568664 86.91550917 -0.10492331 101.74860534 -0.10342209 C102.54741824 -0.10334218 103.34623114 -0.10326227 104.16925049 -0.10317993 C105.36894186 -0.10305729 105.36894186 -0.10305729 106.59286943 -0.10293217 C119.54968958 -0.10211956 132.5063934 -0.12125322 145.46317992 -0.14945666 C158.78408558 -0.17822267 172.10493459 -0.19199491 185.42587209 -0.19026911 C192.89774189 -0.18960649 200.36948975 -0.19504278 207.84133148 -0.21662521 C214.20374239 -0.23488604 220.56597607 -0.23914436 226.92840192 -0.22560637 C230.17051321 -0.21910116 233.41221645 -0.2210676 236.65430832 -0.23631287 C240.17950681 -0.25181141 243.7038236 -0.2424256 247.22900391 -0.22705078 C248.23914889 -0.23733791 249.24929388 -0.24762503 250.29004931 -0.25822389 C263.33854871 -0.13314021 274.07875745 4.79833412 283.61846924 13.51742554 C293.85968231 24.30515346 294.24187941 38.00919232 294.23907471 51.99765015 C294.24347833 54.46000848 294.27997237 56.92061382 294.31768799 59.38265991 C294.32355223 60.96273198 294.32752425 62.54281246 294.32940674 64.12289429 C294.34377777 64.85114914 294.3581488 65.57940399 294.37295532 66.32972717 C294.32735957 71.45186093 293.08824436 74.32410132 289.86846924 78.26742554 C287.26732825 80.26365002 284.65697719 81.87173268 281.72784424 83.34164429 C274.64996557 86.96484408 269.23447596 91.62678956 265.93096924 99.01742554 C263.28627301 107.37860804 264.22093966 116.3906483 267.86846924 124.26742554 C272.08480935 131.94718788 277.81024537 136.13367181 285.86846924 139.26742554 C290.49863976 141.47727965 291.93097693 143.53201664 293.86846924 148.26742554 C294.15040329 150.9573246 294.29028319 153.40479555 294.26690674 156.08773804 C294.26977692 156.82764984 294.27264709 157.56756165 294.27560425 158.32989502 C294.27763748 159.89143644 294.27215959 161.45300376 294.25958252 163.01449585 C294.24365484 165.36503467 294.2593835 167.71381789 294.27862549 170.06430054 C294.29967848 184.93292377 292.15004881 197.80978656 281.68096924 209.01742554 C271.33327727 218.83402735 259.38681932 220.58009621 245.60359192 220.52812195 C244.51250041 220.5319475 243.42140891 220.53577304 242.29725403 220.53971452 C238.66412287 220.54998152 235.03115161 220.54606435 231.39801025 220.54208374 C228.78387303 220.54643366 226.16973709 220.55161774 223.55560303 220.55757141 C217.20586375 220.57028284 210.85616684 220.5721166 204.50641698 220.56977115 C199.34274812 220.56798403 194.17909206 220.56974604 189.01542473 220.57399559 C188.27893413 220.57459078 187.54244353 220.57518597 186.78363503 220.57579919 C185.28719441 220.57701101 183.7907538 220.57822515 182.29431318 220.57944157 C168.2794734 220.59030316 154.26465772 220.58816102 140.24981659 220.58205672 C127.44443101 220.57688738 114.6391215 220.58814593 101.83375097 220.60715494 C88.66533957 220.62655212 75.49696413 220.63478614 62.32853836 220.63103169 C54.94338631 220.62912268 47.558299 220.631578 40.17315865 220.64574623 C33.22835591 220.65893562 26.28370769 220.65637456 19.33890533 220.64333534 C16.79406368 220.64097146 14.24921129 220.64369746 11.70438194 220.65195847 C8.22285566 220.66244304 4.7418385 220.65431096 1.2603302 220.64164734 C-0.23970091 220.65270877 -0.23970091 220.65270877 -1.77003568 220.66399366 C-14.1282933 220.56982977 -25.11953651 217.2452198 -34.25653076 208.82992554 C-43.31654697 199.40695028 -46.26145258 188.74243369 -46.33465576 175.98226929 C-46.34035583 175.20355972 -46.34605591 174.42485016 -46.35192871 173.62254333 C-46.36133001 171.98457174 -46.36789319 170.34658165 -46.37176514 168.70858765 C-46.38151492 166.20898709 -46.41260091 163.71019452 -46.44403076 161.21078491 C-46.45055783 159.61378455 -46.45580947 158.01677836 -46.45965576 156.41976929 C-46.47200256 155.67694199 -46.48434937 154.93411469 -46.49707031 154.16877747 C-46.47245583 148.41927176 -44.95681801 145.40998374 -41.31121826 141.13070679 C-38.77639732 138.96384373 -36.3034316 137.8000586 -33.25653076 136.45492554 C-27.82188142 133.81693881 -24.40815956 131.32341568 -21.13153076 126.26742554 C-20.72160889 125.70797241 -20.31168701 125.14851929 -19.88934326 124.57211304 C-15.54844369 117.65661095 -16.01477802 108.48161638 -17.67449951 100.73226929 C-18.43088107 98.41679709 -18.43088107 98.41679709 -20.13153076 95.26742554 C-20.64715576 94.23617554 -21.16278076 93.20492554 -21.69403076 92.14242554 C-25.64050017 87.48761546 -30.85480997 84.99560153 -36.19793701 82.17758179 C-40.81807404 79.69288606 -43.77508277 76.98032152 -46.13153076 72.26742554 C-46.26721103 69.6479542 -46.34427632 67.05648429 -46.36981201 64.43539429 C-46.37788376 63.64780228 -46.38595551 62.86021027 -46.39427185 62.04875183 C-46.40812477 60.37337446 -46.41884151 58.69796872 -46.42669678 57.02255249 C-46.43812039 55.33040949 -46.45841609 53.63829969 -46.48822021 51.94638062 C-46.73496982 37.93403583 -46.09400077 25.14212172 -36.13153076 14.26742554 C-35.34455811 13.34510132 -35.34455811 13.34510132 -34.54168701 12.40414429 C-25.28846359 2.23648467 -13.16372587 -0.04000788 0 0 Z " fill="var(--gen-light-gray)" transform="translate(145.13153076171875,36.732574462890625)" mask="url(#TicketHoleMask)"></path>
            <path d="M0 0 C4.7344316 1.91391916 7.72684393 5.45368786 10 10 C10.09976557 12.07835145 10.13346086 14.15996785 10.13803101 16.2407074 C10.14085229 16.8880234 10.14367357 17.5353394 10.14658034 18.20227104 C10.15494416 20.38152275 10.15626615 22.56072377 10.15771484 24.73999023 C10.16238205 26.29877364 10.16752546 27.85755568 10.17311096 29.41633606 C10.18440501 32.77975271 10.19283315 36.14316042 10.19923019 39.50658989 C10.20990704 44.83198726 10.23015383 50.15732101 10.25234985 55.48268127 C10.31427567 70.62864243 10.36820016 85.7746009 10.40136719 100.9206543 C10.419755 109.2808621 10.44874812 117.6409643 10.4893719 126.0010944 C10.5103823 130.42300711 10.52589057 134.84478701 10.52817917 139.26675224 C10.53033825 143.43401196 10.54633501 147.60099579 10.57256889 151.76817131 C10.57971721 153.29062882 10.58188476 154.81311991 10.57846642 156.33559036 C10.55084498 170.98775919 12.76773102 184.68991634 23.125 195.75 C33.000268 205.0492107 43.48084663 208.31143684 56.70324707 208.25828552 C57.77009625 208.26196123 58.83694543 208.26563693 59.93612337 208.26942402 C63.5049905 208.2793909 67.07370142 208.27525578 70.64257812 208.27124023 C73.20365057 208.27562796 75.76472158 208.28093029 78.32579041 208.28707886 C83.83796721 208.29857517 89.35010167 208.30423079 94.86228943 208.30496025 C102.83954224 208.30628785 110.81672515 208.32141634 118.79395324 208.34045542 C131.74755523 208.37127525 144.70115899 208.39545136 157.65478516 208.41333008 C158.81691881 208.4149391 158.81691881 208.4149391 160.00252992 208.41658062 C168.64757942 208.42840248 177.29262962 208.43860841 185.93768311 208.44702148 C189.07352704 208.45009553 192.20937095 208.4531843 195.34521484 208.45629883 C196.50592828 208.45744684 196.50592828 208.45744684 197.69009048 208.45861804 C210.59624694 208.47170297 223.50235269 208.49634541 236.40847158 208.53004223 C244.3649983 208.55031959 252.3214165 208.56062337 260.27796924 208.55805302 C266.37387494 208.55689492 272.46964539 208.57105231 278.56552315 208.59086227 C281.06527148 208.59646771 283.56503733 208.59694159 286.06478691 208.59192467 C289.47563667 208.58579644 292.8859499 208.59799189 296.29675293 208.61473083 C297.28712571 208.60851902 298.27749848 208.6023072 299.29788256 208.59590715 C306.07814661 208.65659053 311.09246381 209.47503436 316.375 214.0625 C320.0958689 218.49892061 319.40787537 223.45446376 319 229 C318.03364769 232.32183606 317.27721243 234.09763457 314.43259895 236.10738707 C308.66489598 239.23025015 303.73097445 239.56694164 297.2505188 239.50793457 C296.19057642 239.51417453 295.13063404 239.5204145 294.03857219 239.52684355 C290.49830533 239.5427565 286.95872861 239.53017494 283.41845703 239.51757812 C280.87508239 239.52300029 278.33171089 239.53012347 275.78834534 239.53881836 C269.60168051 239.55515906 263.41526966 239.55277281 257.22860153 239.5411678 C252.19317541 239.53211593 247.1578036 239.53091707 242.12237167 239.53526306 C241.40428332 239.53587599 240.68619497 239.53648893 239.94634636 239.53712043 C238.48720478 239.53839943 237.02806322 239.53969629 235.56892167 239.5410108 C221.89148481 239.55241157 208.21415525 239.53931508 194.536736 239.51780933 C182.83433253 239.49997697 171.13208802 239.50301144 159.4296875 239.52148438 C145.81504227 239.5429661 132.20049135 239.55127291 118.58583152 239.53903532 C117.12914969 239.53776127 115.67246784 239.53650378 114.21578598 239.53526306 C113.49924592 239.53464596 112.78270586 239.53402886 112.04445247 239.53339306 C107.02786332 239.5299591 102.01133458 239.53572678 96.99475479 239.54518127 C90.2165073 239.55767558 83.43860232 239.54858031 76.66036797 239.52560425 C74.18458866 239.52035417 71.70878398 239.52176669 69.23301506 239.53065491 C44.85286887 239.61004879 23.81644679 237.02744676 5 220 C4.23042969 219.32324219 3.46085937 218.64648438 2.66796875 217.94921875 C-3.60657206 212.10224461 -7.81344688 205.44064668 -12 198 C-12.63421875 196.95199219 -12.63421875 196.95199219 -13.28125 195.8828125 C-18.77865061 186.17906749 -20.10668145 173.13654484 -20.14717102 162.16233826 C-20.15084771 161.51130585 -20.1545244 160.86027345 -20.1583125 160.18951279 C-20.16924532 158.0279449 -20.17317515 155.86642524 -20.17700195 153.70483398 C-20.18327406 152.14705252 -20.18992151 150.58927253 -20.19691467 149.03149414 C-20.21785372 143.93637108 -20.22830166 138.84124804 -20.23828125 133.74609375 C-20.24233142 131.98824613 -20.24644841 130.23039866 -20.25063133 128.47255135 C-20.26965392 120.21898356 -20.28389587 111.9654246 -20.2922433 103.71183914 C-20.3020308 94.19310947 -20.32840189 84.67461139 -20.36874419 75.15596336 C-20.39889305 67.78933307 -20.41371066 60.42276929 -20.41702431 53.05607849 C-20.41937447 48.65947255 -20.42833182 44.26311489 -20.45348549 39.86657524 C-20.47675246 35.73373626 -20.48100517 31.60130942 -20.47072411 27.46842194 C-20.47022844 25.95350588 -20.47655799 24.43856958 -20.49028015 22.92371559 C-20.50799299 20.85221008 -20.50089844 18.78218519 -20.48774719 16.7106781 C-20.49013555 15.55277991 -20.4925239 14.39488173 -20.49498463 13.20189571 C-19.73953723 8.31515042 -17.11308566 5.281735 -13.9375 1.625 C-9.4060129 -0.8817801 -5.06257336 -0.6261403 0 0 Z " fill="var(--gen-light-gray)" transform="translate(59,78)"></path>
        </svg>
    </div>

    <!-- <gux-icon icon-name="toolbar-notification" decorative="true" class="unread-badge svg-icon icon-certificate" hydrated="" style="transform: translate(3px, -6px);"></gux-icon> -->

    <gux-tooltip placement="right" id="gux-tooltip-uoz2uq1885" class="" role="tooltip" hydrated="" data-placement="right" style="left: 71px; top: 595.5px; visibility: visible;">Tickets</gux-tooltip>
</a>`;
sidebar.insertBefore(newLiBtn, sidebar.querySelector('LI.spacer'));

TicketBody.style.overflow = 'hidden';
TicketBtn.innerHTML = `<div style="width: 60%; height: 60%; overflow: visible;" title="" class="app-img icon ember-view">
    <svg transform="rotate(-45)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z"/></svg>
</div>
<gux-tooltip placement="bottom" id="gux-tooltip-k38ybk46n8" class="" role="tooltip" hydrated="" data-placement="bottom" style="left: 800.875px; top: 117px; visibility: visible;">
    <span aria-hidden="true">Ticket</span>
</gux-tooltip>`;
TicketBody.innerHTML = `
    <div id="NewTicketPanelBodySwitcher" style="width: 100%; height: 100%; border: none"></div>
    <textarea style="display: none; opacity: 0; pointer-events: none" id="interaction-notes" dir="auto" placeholder="Type your notes here (no personal data)..." aria-label="Notes"></textarea>
`;

const NewTicketPanelBodySwitcher = document.getElementById('NewTicketPanelBodySwitcher');

const InteractionNoteTextarea = document.getElementById('interaction-notes');
let previousInteractionNotesValue = null;
let letChangesBeTracked = true;
let checkChanges = setInterval(() => {
    if (previousInteractionNotesValue !== InteractionNoteTextarea.value) {
        previousInteractionNotesValue = InteractionNoteTextarea.value;
        
        chatUpdate(previousInteractionNotesValue);
    }
}, 250);
function updateInteractionNotes(newVal) {
    console.log('setting interaction notes to: ' + newVal);
    letChangesBeTracked = false;
    previousInteractionNotesValue = newVal;
    InteractionNoteTextarea.value = newVal;
    letChangesBeTracked = true;
}
panels = [];
function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
function chatUpdate(textareaVal) {
    if (!isJsonString(textareaVal)) { // this is a new conversation that hasn't been used yet
        // create new JSON with a unique ID for this conversation
        newUid = Math.random().toString(36).substring(2, length + 2);
        let newJSON = {
            uid: newUid,
            IdentifyTab: {
                selected_id: '',
                searchQuery: '',
                results: []
            }
        }
        // create new window
        NewTicketPanelBodySwitcher.innerHTML += '<iframe id="TicketFrame_'+newUid+'" style="width: 100%; height: 100%; border: none"></iframe>';
        let thisNewIframe = document.getElementById('TicketFrame_'+newUid);
        thisNewIframe.srcdoc = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Genesys Ticketer Panel</title>
    <style>
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
}
:root {
    --accordion-transition: none;
    --gen-orange: #FF451A;
    --gen-dark-gray: #33383D;
    --gen-light-gray: #98A7B8;
    --gen-blue: #2A60C8;
}
/* HTML: <div class="loader"></div> */
.loader {
    --c: no-repeat linear-gradient(var(--gen-orange) 0 0);
    background: 
        var(--c),var(--c),var(--c),
        var(--c),var(--c),var(--c),
        var(--c),var(--c),var(--c);
    background-size: 16px 16px;
    animation: 
        l32-1 1s infinite,
        l32-2 1s infinite;
}
@keyframes l32-1 {
    0%,100% {width:45px;height: 45px}
    35%,65% {width:65px;height: 65px}
}
  @keyframes l32-2 {
    0%,40%  {background-position: 0 0,0 50%, 0 100%,50% 100%,100% 100%,100% 50%,100% 0,50% 0,  50% 50% }
    60%,100%{background-position: 0 50%, 0 100%,50% 100%,100% 100%,100% 50%,100% 0,50% 0,0 0,  50% 50% }
}
#loadingOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
.accordion {
    background-color: var(--gen-dark-gray);
    color: var(--gen-light-gray);
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    height: 55px;
}

.accordion.active, .accordion:hover {
    color: white;
}

.accordion:after {
    content: '\\002B';
    color: #777;
    font-weight: bold;
    float: right;
    margin-left: 5px;
}

.active:after {
    content: "\\2212";
}

.accordion-panel {
    padding: 0 18px;
    background-color: white;
    height: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    transition: var(--accordion-transition);
}

input[type="text"] {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid rgb(36, 36, 36);
    box-shadow: 0px 0px 20px -10px #bfbfbf inset;
    color: black;
}

#IdenifySearchButton {
    padding: 10px 30px;
    background-color: white;
    color: var(--gen-orange);
    border: 1px solid var(--gen-orange);
    cursor: pointer;
}
#IdenifySearchButton:disabled {
    border-color: var(--gen-light-gray);
    color: var(--gen-light-gray);
    cursor: not-allowed;
}

#peopleReultsList .personCard {
    position: relative;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid rgb(36, 36, 36);
    box-shadow: 0px 0px 20px -10px #bfbfbf inset;
    color: black;
    margin-top: 10px;
}
#peopleReultsList .personCard h3 { margin: 0; color: #306090; cursor: pointer; }
#peopleReultsList .personCard p { margin: 0; padding-left: 10px; }
#peopleReultsList .personCard button {
    position: absolute;
    height: calc(100% - 10px);
    right: 5px;
    top: 5px;
    padding: 3px 15px;
    color: var(--gen-orange);
    border: 1px solid var(--gen-orange);
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}
</style>
</head>

<body>
    <button id="IdentifyAccordionBtn" class="accordion active">Identify</button>
    <div class="accordion-panel">
        <center>
            <h2>TD Ticket</h2>
            <input type="text" id="IdenifySearchQuery" oninput="detectSearchQueryType(this.value, this.nextElementSibling.firstElementChild)" onenter="IdenifySearchButton" placeholder="Search Query..." style="width: 80%; max-width: 230px;">
            <p style="color: gray;">Searching as <span>...</span></p>
            <br>
            <button disabled id="IdenifySearchButton" onclick="conductIdenitySearch(_('IdenifySearchQuery'))">Search</button>
        </center>
        <br>
        <div id="peopleReultsList"></div>
        
    </div>

    <button id="AssistAccordionBtn" class="accordion">Assist</button>
    <div class="accordion-panel">
        <p>This is where we would have all the inpout fields where people can take their notes and select their KB.</p>
    </div>

    <button id="ReviewAccordionBtn" class="accordion">Review</button>
    <div class="accordion-panel">
        <p>This is where the analyst can review the ticket before submitting.</p>
    </div>

    <div id="loadingOverlay" style="display: none;">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
            <div class="loader"></div>
        </div>
        <div id="loadingOverlay_closePopupBtn" style="display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
            <button style="transform: translateY(80px); padding: 10px; border-radius: 5px; border: 1px solid var(--gen-orange); background-color: #d8d8d8; color: var(--gen-orange); cursor: pointer;" onclick="try{currentPopupWindow.close()}catch(e){}">Close Popup Window</button>
        </div>
    </div>

    <script>
let AccordianSections = Array.from(document.getElementsByClassName("accordion"));
const _ = (el) => document.getElementById(el);
AccordianSections.forEach((el) => {
    if (el.classList.contains("active")) {
        el.nextElementSibling.style.height = (document.body.scrollHeight - 165) + "px";
    }
    el.open = (yesOrNo) => {
        if (yesOrNo) {
            el.classList.add("active");
            el.nextElementSibling.style.height = (document.body.scrollHeight - 165) + "px";
        } else {
            el.classList.remove("active");
            el.nextElementSibling.style.height = null;
        }
    };
    el.setActive = () => {
        AccordianSections.forEach((e) => e.open(false));
        el.open(true);
    }
    el.addEventListener("click", el.setActive );
});
// set transition AFTER opening the first section
document.documentElement.style.setProperty('--accordion-transition', 'height 0.5s ease');
// on doument resize, re-set height property
window.addEventListener('resize', () => {
    document.querySelector('.accordion.active + .accordion-panel').style.height = (document.body.scrollHeight - 165) + "px";
});
// register input onenter
Array.from(document.querySelectorAll('*[onenter]')).forEach((el) => {
    el.addEventListener("keyup", (e) => {
        console.log(e.keyCode);
        
        if (e.keyCode === 13) {
            _(el.getAttribute('onenter')).click();
        }
    });
})

function detectSearchQueryType(inVal, outputSpan) {
    inVal = inVal.trim().toLowerCase();
    if (inVal == '') {
        outputSpan.innerText = '...';
        _('IdenifySearchButton').disabled = true;
        _('IdenifySearchQuery').setAttribute('Q-type', 'X');
    }
    // if inVal is an I-number
    else if (inVal.length == 9 && !isNaN(inVal)) {
        outputSpan.innerText = 'I-Number';
        _('IdenifySearchButton').disabled = false;
        _('IdenifySearchQuery').setAttribute('Q-type', 'I#');
    }
    // if inVal starts with + and has only numbers, parenthesis, hyphens, and spaces
    else if (inVal.startsWith('+') && inVal.match(/^[+0-9()-\\s]*$/)) {
        outputSpan.innerText = 'Phone Number';
        _('IdenifySearchButton').disabled = false;
        _('IdenifySearchQuery').setAttribute('Q-type', 'PHONE');
    }
    // if inval is a name
    else {
        outputSpan.innerText = 'Name';
        _('IdenifySearchButton').disabled = false;
        _('IdenifySearchQuery').setAttribute('Q-type', 'NAME');
    }
}
function showLoader(yesOrNo) {
    _('loadingOverlay').style.display = yesOrNo ? null : 'none';
}

async function conductIdenitySearch(el) {
    let q = el.value;
    let t = el.getAttribute('Q-type');
    if (q.trim() == '' || t == 'X') return;

    showLoader(true);

    await new Promise(r => setTimeout(r, 500));
    
    showLoader(false);

    exampleResults = [
        ['020bfd25-06c8-ee11-9f01-c89665346b33', 'Michael Becker', 'bec24007@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['bae72298-d6bb-ec11-997e-c89665346b33', 'Aleah Clyde', 'cly22001@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['020bfd25-06c8-ee11-9f01-c89665346b33', 'Michael Becker', 'bec24007@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['bae72298-d6bb-ec11-997e-c89665346b33', 'Aleah Clyde', 'cly22001@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['020bfd25-06c8-ee11-9f01-c89665346b33', 'Michael Becker', 'bec24007@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['bae72298-d6bb-ec11-997e-c89665346b33', 'Aleah Clyde', 'cly22001@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['020bfd25-06c8-ee11-9f01-c89665346b33', 'Michael Becker', 'bec24007@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['bae72298-d6bb-ec11-997e-c89665346b33', 'Aleah Clyde', 'cly22001@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['020bfd25-06c8-ee11-9f01-c89665346b33', 'Michael Becker', 'bec24007@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['bae72298-d6bb-ec11-997e-c89665346b33', 'Aleah Clyde', 'cly22001@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM']
    ];

    // display Results
    const peopleReultsList = _('peopleReultsList');
    peopleReultsList.innerHTML = '';
    exampleResults.forEach((result) => {
        let personCard = document.createElement('div');
        personCard.className = 'personCard';
        personCard.innerHTML = \`
            <h3 onclick="openPersonDetails('\`+result[0]+\`')">\`+result[1]+\`</h3>
            <p>\`+result[2]+\`</p>
            <p>\`+result[3]+\`</p>
            <button onclick="selectPersonAndStartTicket('\`+result[0]+\`')"><div style="width: 30px; height: 100%; display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="var(--gen-orange)"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z"/></svg></div></button>
        \`;
        peopleReultsList.appendChild(personCard);
    });
}
let currentPopupWindow = null;
async function openPersonDetails(U_identifier) {
    const popupWidth = 800;
    const popupHeight = 760;
    const left = (screen.width - popupWidth) / 2;
    const top = (screen.height - popupHeight) / 2;
    currentPopupWindow = window.open('https://td.byui.edu/TDNext/Apps/People/PersonDet.aspx?U=' + U_identifier, 'PersonDetails', 'width='+popupWidth+',height='+popupHeight+',top='+top+',left='+left);
}

function selectPersonAndStartTicket(U_identifier) {
    _('AssistAccordionBtn').setActive();
}
</script>
</body>

</html>`;
        panels.push(thisNewIframe);

        // update interaction notes
        updateInteractionNotes(JSON.stringify(newJSON));
    }

    // parse the JSON
    let parsedJSON = JSON.parse(textareaVal);
    console.log(parsedJSON);

    // show the right panel
    panels.array.forEach(el => el.style.display = 'none');
    document.getElementById('TicketFrame_' + parsedJSON.uid).style.display = 'block';
}