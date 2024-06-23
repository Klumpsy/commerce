import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      version="1.0"
      {...props}
      className={clsx('h-4 w-4 fill-white dark:fill-white', props.className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      width="2084.000000pt"
      height="2085.000000pt"
      viewBox="0 0 2084.000000 2085.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,2085.000000) scale(0.100000,-0.100000)"
        fill="#f5c2db"
        stroke="none"
      >
        <path
          d="M0 10425 l0 -10425 10420 0 10420 0 0 10425 0 10425 -10420 0 -10420
0 0 -10425z m10594 9473 c3 -13 7 -49 8 -81 l3 -57 -57 -11 c-38 -8 -59 -17
-62 -28 -3 -9 -48 -270 -101 -581 -53 -311 -98 -566 -99 -567 -3 -4 -268 -25
-271 -21 -1 2 -76 187 -165 413 -89 225 -164 414 -168 419 -3 5 -49 -189 -102
-432 -53 -244 -99 -444 -101 -446 -9 -7 -264 -21 -269 -15 -3 4 -90 255 -195
558 l-190 550 -60 3 -60 3 -8 79 c-4 43 -6 80 -5 81 5 5 530 47 533 43 1 -2 5
-38 9 -80 l7 -77 -38 -10 c-21 -5 -51 -13 -66 -17 -23 -5 -26 -10 -21 -28 101
-325 216 -678 219 -674 2 1 47 206 100 453 53 248 99 453 103 457 4 4 54 8
111 10 l103 3 171 -432 c94 -238 172 -432 173 -430 4 4 104 688 104 710 0 13
-13 17 -62 19 l-63 3 -9 78 c-5 42 -7 79 -5 82 5 4 423 42 491 44 31 1 38 -3
42 -21z m804 -70 l122 -11 14 -46 c7 -25 80 -292 161 -593 l148 -547 31 -7
c74 -16 73 -15 65 -94 -5 -40 -10 -75 -13 -77 -3 -3 -113 5 -246 18 l-240 23
0 37 c0 20 3 57 6 83 l7 46 50 0 c46 0 49 1 43 23 -3 12 -13 54 -22 93 l-17
70 -230 23 c-126 12 -233 18 -237 14 -4 -4 -23 -43 -43 -85 l-35 -76 49 -12
50 -12 -7 -77 c-4 -42 -8 -78 -11 -80 -2 -3 -114 6 -249 19 l-245 23 7 76 c3
42 8 79 11 84 2 4 26 7 53 7 l50 0 51 103 c28 56 152 301 276 545 211 416 226
442 251 442 15 0 82 -5 150 -12z m1360 -237 c343 -88 625 -161 627 -163 7 -7
-82 -332 -92 -335 -9 -3 -202 44 -210 51 0 0 5 33 11 73 l13 71 -125 32 c-68
17 -127 29 -129 26 -2 -2 -55 -203 -117 -446 l-113 -442 66 -31 c36 -18 68
-33 70 -35 11 -6 -32 -152 -44 -152 -12 0 -568 140 -572 144 -1 1 2 18 7 37 5
19 14 54 20 77 l11 44 80 -7 c43 -4 79 -4 79 -1 0 3 50 199 110 435 61 236
110 436 110 444 0 10 -32 23 -107 41 -60 15 -115 29 -125 32 -12 4 -20 -8 -33
-48 -31 -94 -21 -89 -137 -60 -57 14 -105 26 -107 28 -3 3 79 344 83 344 0 0
282 -72 624 -159z m-4857 -102 c21 -62 22 -73 9 -81 -8 -5 -38 -24 -67 -41
l-51 -32 193 -530 c107 -291 193 -530 192 -531 -1 -1 -63 -25 -137 -52 l-135
-49 -55 40 c-30 23 -221 164 -424 315 -202 150 -370 272 -372 270 -4 -4 225
-631 235 -641 4 -4 40 -1 80 6 l73 14 10 -26 c5 -14 18 -49 28 -77 l18 -50
-269 -98 c-147 -54 -275 -99 -284 -100 -12 -1 -24 18 -41 64 -13 36 -22 70
-20 76 3 7 31 26 63 44 32 19 59 34 61 35 2 2 -276 772 -314 869 -6 15 -14 17
-45 12 -22 -3 -56 -9 -77 -12 l-39 -6 -27 73 c-15 40 -23 75 -19 79 4 4 99 40
210 80 l202 73 421 -313 c232 -171 423 -310 426 -308 4 5 -221 627 -231 636
-3 3 -38 0 -77 -6 -39 -7 -75 -9 -78 -5 -10 12 -54 142 -49 146 11 9 555 204
560 201 3 -2 16 -35 30 -75z m6473 -474 c136 -63 256 -119 266 -125 18 -10 17
-13 -12 -80 -19 -43 -37 -70 -46 -70 -9 0 -42 7 -74 16 -35 10 -63 13 -68 8
-11 -12 -390 -829 -390 -842 0 -5 27 -27 60 -48 33 -22 60 -42 60 -45 0 -18
-62 -139 -71 -139 -10 0 -529 237 -538 245 -5 5 61 145 68 145 3 0 38 -9 77
-19 l72 -18 192 414 c105 228 194 421 196 428 3 8 -19 31 -55 56 -34 24 -61
46 -61 50 0 16 60 139 68 139 5 0 120 -52 256 -115z m-8067 -194 c35 -59 74
-128 88 -152 l24 -45 -62 -36 c-34 -20 -78 -45 -98 -57 l-37 -22 -33 52 c-19
29 -37 57 -41 62 -7 11 -228 -111 -228 -126 0 -7 441 -777 455 -795 1 -1 33 9
70 23 37 14 71 25 75 25 14 0 83 -131 74 -140 -7 -7 -178 -107 -506 -296 -3
-2 -24 27 -46 65 l-40 70 59 53 59 53 -226 390 c-124 215 -230 394 -234 398
-6 7 -104 -45 -208 -109 l-22 -14 30 -60 c16 -33 30 -63 30 -68 0 -8 -175
-112 -189 -112 -4 0 -46 68 -94 150 l-87 151 37 22 c140 83 1079 626 1083 627
3 0 33 -49 67 -109z m8823 -192 c132 -83 242 -154 244 -158 3 -4 -13 -37 -35
-74 l-41 -66 -51 21 c-93 37 -88 39 -149 -59 -30 -48 -71 -113 -91 -144 l-36
-57 50 -31 c28 -17 53 -31 56 -31 7 0 415 151 421 156 2 1 -10 15 -27 31 l-31
28 43 68 43 67 239 -151 c132 -83 242 -153 244 -155 7 -6 -74 -134 -86 -134
-6 0 -41 13 -77 29 l-65 30 -263 -88 -263 -88 2 -34 c1 -19 14 -164 28 -324
l26 -290 56 -51 56 -50 -38 -63 c-21 -34 -42 -64 -46 -67 -6 -3 -468 282 -486
300 -4 4 77 136 84 136 2 0 18 -7 34 -16 17 -8 33 -13 36 -10 6 6 -12 325 -23
416 -5 43 -8 47 -70 84 -36 21 -67 37 -69 34 -13 -13 -185 -290 -185 -298 0
-5 23 -28 50 -51 28 -23 50 -46 50 -51 0 -5 -18 -37 -41 -73 l-40 -64 -207
131 c-114 72 -226 143 -249 157 -24 14 -43 29 -43 33 0 15 76 128 86 128 6 0
39 -11 73 -26 35 -14 66 -23 69 -19 3 3 117 182 253 398 l247 392 -54 48 c-30
27 -54 53 -54 59 0 16 72 128 82 128 5 0 117 -68 248 -151z m-10166 -670 c59
-72 109 -136 112 -142 2 -7 -35 -43 -82 -82 l-87 -70 -52 59 -53 59 -173 -143
c-96 -78 -174 -147 -174 -153 0 -11 186 -245 196 -246 3 -1 89 67 190 149 101
83 186 150 190 150 14 0 130 -153 122 -161 -5 -5 -87 -73 -183 -152 -96 -78
-175 -148 -175 -154 0 -14 214 -278 226 -278 4 0 86 64 183 143 l175 143 -46
65 c-25 36 -44 66 -42 68 2 1 41 33 87 70 47 39 87 65 92 60 25 -27 220 -270
219 -274 -1 -11 -872 -715 -884 -715 -7 0 -33 25 -58 56 l-46 57 37 43 c20 24
43 52 50 61 11 14 -24 61 -278 372 -160 195 -295 358 -301 361 -5 4 -39 -10
-75 -30 -37 -20 -67 -35 -68 -33 -1 2 -23 29 -50 61 -44 53 -47 60 -33 74 25
25 861 711 868 712 3 1 54 -58 113 -130z m12239 -946 l237 -238 -47 -47 -48
-46 -585 -98 c-322 -54 -588 -100 -592 -104 -4 -3 70 -83 165 -178 l173 -173
59 45 c33 25 65 46 70 46 6 0 44 -34 85 -75 l75 -75 -25 -24 c-100 -95 -242
-217 -249 -214 -5 2 -180 172 -389 379 l-381 376 52 51 52 51 588 98 c323 54
587 100 587 103 0 3 -72 74 -161 159 l-160 154 -32 -23 c-18 -13 -45 -34 -62
-46 l-30 -22 -82 78 -83 77 136 122 136 121 137 -129 c75 -71 243 -237 374
-368z m-13335 31 c59 -53 118 -107 131 -120 l24 -22 -73 -81 c-41 -45 -77 -81
-80 -81 -4 0 -33 20 -65 45 l-59 46 -21 -23 c-12 -13 -82 -90 -155 -171 -111
-124 -130 -151 -119 -161 149 -138 232 -207 238 -200 5 5 77 86 160 179 84 94
155 171 159 172 4 2 40 -28 81 -65 l74 -68 -159 -177 c-87 -98 -159 -182 -159
-186 0 -5 61 -63 135 -130 103 -93 137 -118 146 -108 183 205 272 306 283 320
13 16 9 23 -39 72 l-53 53 19 24 c11 14 44 52 74 85 l56 62 131 -117 c73 -64
131 -122 130 -128 -1 -7 -172 -201 -380 -433 l-379 -421 -59 51 c-32 28 -59
53 -59 56 0 3 18 34 40 69 l40 64 -351 315 -350 315 -59 -45 c-32 -25 -62 -45
-67 -45 -4 1 -33 23 -63 51 -41 37 -52 53 -45 63 26 38 751 836 758 836 5 0
57 -43 115 -96z m13952 -713 c93 -129 170 -238 170 -242 0 -8 -115 -89 -126
-89 -5 0 -32 23 -60 51 l-52 52 -286 -208 c-157 -114 -303 -226 -325 -250 -67
-73 -75 -152 -26 -263 29 -62 114 -156 170 -185 54 -27 136 -27 192 1 30 16
588 414 611 437 2 2 -12 34 -32 72 l-35 70 65 48 c36 26 69 44 73 39 4 -5 81
-110 171 -234 90 -124 167 -230 171 -236 6 -7 -15 -28 -57 -58 l-67 -48 -53
52 c-32 33 -58 51 -67 47 -8 -3 -148 -102 -311 -220 -301 -219 -353 -249 -453
-263 -203 -26 -468 169 -593 438 -99 212 -74 419 67 549 15 15 156 120 313
234 157 114 286 210 288 215 2 4 -11 38 -28 76 -28 63 -29 68 -13 80 10 7 36
26 58 43 22 17 46 30 52 28 7 -1 89 -108 183 -236z m-14894 -324 c2 -2 -7 -29
-20 -59 l-24 -55 224 -224 c124 -123 311 -313 416 -421 l190 -197 -67 -110
c-36 -61 -69 -112 -73 -114 -4 -2 -203 44 -442 103 -239 60 -436 107 -437 106
-2 -2 77 -90 379 -423 l226 -250 -70 -117 c-52 -88 -74 -116 -86 -112 -9 3
-264 78 -567 166 l-549 162 -18 -22 c-10 -12 -26 -33 -36 -48 l-19 -26 -71 42
-71 42 136 228 c75 125 137 229 139 230 1 2 34 -15 72 -38 l70 -41 -24 -61
c-14 -33 -24 -62 -22 -63 7 -6 690 -226 693 -223 1 2 -139 158 -311 347 -173
188 -314 346 -314 349 0 12 105 182 112 182 5 0 207 -50 450 -110 242 -61 444
-109 447 -108 7 3 -435 433 -490 477 l-30 24 -43 -48 -42 -49 -55 32 c-30 17
-60 36 -68 41 -12 8 12 54 123 239 l137 230 65 -38 c36 -21 67 -40 70 -43z
m15819 -1069 l92 -193 -273 -452 c-150 -249 -269 -453 -266 -453 4 0 145 66
314 146 l306 146 -19 69 c-10 38 -19 72 -19 77 0 9 138 78 144 71 9 -9 259
-540 255 -542 -40 -24 -144 -66 -149 -60 -3 4 -23 32 -44 61 -21 28 -42 52
-47 52 -5 0 -235 -108 -511 -240 l-503 -239 -17 32 c-9 18 -38 77 -63 133
l-47 100 271 449 c149 247 269 450 267 452 -4 4 -597 -276 -610 -288 -6 -5 -3
-32 7 -69 9 -33 17 -67 17 -75 0 -10 -26 -27 -66 -45 -36 -17 -68 -30 -71 -30
-2 0 -33 61 -69 135 -35 74 -93 196 -128 270 l-65 135 37 19 c20 10 54 26 74
34 l38 16 41 -60 c23 -32 46 -59 52 -59 9 0 147 65 699 328 l147 70 -19 69
c-11 37 -20 71 -20 75 0 13 135 77 144 68 5 -5 50 -96 101 -202z m-14075 0
c293 -190 621 -313 1070 -402 170 -34 250 -47 755 -121 571 -85 846 -152 1079
-263 259 -124 450 -276 639 -507 132 -163 189 -194 297 -162 30 8 145 47 256
84 397 137 813 220 1274 254 205 15 842 6 1050 -15 360 -37 499 -65 815 -164
116 -36 266 -83 335 -104 212 -67 288 -53 378 65 131 174 268 303 447 423 254
169 581 286 945 338 99 14 187 23 630 61 413 36 666 85 920 177 184 66 578
282 753 411 l77 57 0 -37 c0 -20 9 -318 21 -662 24 -730 22 -1452 -5 -1771
-67 -775 -162 -1103 -386 -1330 -133 -135 -285 -211 -501 -250 -129 -23 -170
-42 -183 -88 -12 -42 7 -91 90 -228 353 -582 527 -1222 594 -2184 13 -187 13
-577 0 -750 -23 -314 -80 -661 -155 -950 -38 -144 -136 -462 -142 -457 -2 2 2
28 7 58 32 170 82 600 100 872 14 203 14 739 0 927 -136 1878 -1014 3280
-2660 4244 -197 116 -631 332 -825 411 -477 197 -948 319 -1455 380 -183 22
-652 31 -850 16 -1097 -84 -2131 -533 -3075 -1336 -1133 -963 -1785 -2091
-1945 -3365 -109 -873 22 -1851 384 -2847 35 -95 62 -173 60 -173 -7 0 -135
231 -195 353 -231 474 -371 1004 -443 1687 -98 920 9 1766 324 2555 63 158 83
197 182 363 119 198 158 309 139 394 -18 77 -72 113 -266 173 -158 49 -226 85
-303 158 -210 203 -348 493 -406 857 -86 537 -117 1450 -76 2240 13 263 39
655 46 708 l5 42 57 -44 c31 -24 95 -68 142 -98z m-2970 -1314 c168 -48 159
-35 116 -176 l-26 -85 -71 14 c-39 8 -72 13 -73 11 -1 -1 -18 -58 -38 -126
l-36 -122 67 -20 c36 -11 236 -69 444 -129 l378 -109 35 69 c19 38 37 69 41
69 26 0 143 -43 143 -53 0 -15 -158 -558 -164 -564 -2 -2 -38 6 -80 18 -76 22
-76 22 -72 53 3 17 8 52 11 78 l6 46 -53 16 c-402 118 -830 238 -834 233 -6
-6 -74 -225 -74 -239 0 -3 29 -17 65 -30 36 -12 65 -29 65 -35 0 -33 -55 -203
-65 -203 -9 0 -191 51 -307 86 -10 3 -18 11 -18 17 0 7 80 288 177 625 167
579 178 612 197 605 12 -3 86 -25 166 -49z m17681 -116 c6 -24 46 -173 90
-333 106 -387 113 -433 84 -570 -32 -153 -138 -302 -261 -367 -71 -38 -362
-118 -454 -125 -151 -11 -287 43 -405 161 -108 109 -132 166 -245 579 l-97
352 52 16 c112 35 101 38 137 -42 27 -60 34 -70 52 -65 12 3 216 58 454 123
l433 118 -3 80 -3 80 60 17 c89 25 93 24 106 -24z m-6298 -1238 c31 -7 57 -16
57 -19 0 -3 -89 -35 -198 -69 -503 -162 -698 -269 -953 -522 -130 -129 -169
-191 -169 -270 0 -88 67 -147 215 -191 223 -66 317 -106 451 -194 265 -176
446 -506 445 -815 0 -128 -16 -196 -76 -315 -84 -167 -217 -297 -350 -340
-173 -56 -517 17 -745 156 -205 127 -340 320 -415 595 -32 117 -56 168 -91
190 -36 24 -85 7 -181 -65 -148 -110 -246 -232 -393 -486 -97 -167 -172 -275
-249 -358 -82 -88 -89 -110 -71 -229 27 -184 30 -713 5 -906 -12 -92 -48 -302
-52 -299 -2 2 -8 107 -13 233 -13 284 -45 696 -66 829 -33 209 -77 353 -165
526 -89 178 -110 324 -69 485 49 191 162 354 359 518 182 152 374 256 618 335
216 70 296 113 383 207 58 62 99 121 140 204 128 257 380 499 668 644 170 85
305 131 482 162 90 16 348 12 433 -6z m-11800 -180 c87 -11 162 -22 166 -24 4
-3 2 -49 -5 -103 -7 -54 -13 -103 -14 -110 0 -9 -20 -11 -80 -6 -45 3 -80 2
-80 -3 0 -5 -12 -107 -26 -227 -15 -120 -25 -219 -23 -221 3 -3 318 -44 319
-42 0 1 14 108 30 240 16 131 31 240 33 242 2 3 48 -1 101 -7 115 -15 107 18
70 -280 -14 -116 -23 -213 -20 -216 8 -8 354 -48 360 -43 4 5 56 415 56 444 0
8 -25 17 -70 25 -38 7 -72 17 -76 22 -4 7 15 208 21 217 4 5 350 -40 356 -46
7 -9 -129 -1124 -138 -1132 -5 -3 -40 -2 -79 3 -69 8 -72 10 -78 39 -3 17 -6
52 -6 79 0 27 -2 49 -5 49 -3 0 -210 25 -460 55 -251 30 -459 55 -463 55 -5 0
-19 -34 -32 -75 -22 -71 -25 -75 -49 -71 -14 3 -50 8 -78 11 -39 5 -53 11 -53
23 0 8 29 257 65 554 36 296 65 545 65 553 0 19 2 19 193 -5z m18471 -72 c7
-32 116 -1068 116 -1099 l0 -26 -175 -18 c-96 -10 -177 -16 -179 -14 -7 7 -28
210 -23 216 3 3 36 12 73 19 37 8 70 16 72 18 5 6 -40 440 -47 447 -7 7 -307
-24 -316 -32 -3 -3 6 -110 20 -238 14 -127 25 -236 25 -240 0 -5 -43 -12 -95
-16 -52 -4 -98 -8 -102 -9 -5 0 -20 106 -34 237 -14 130 -28 240 -31 243 -6 5
-357 -31 -362 -38 -2 -1 7 -97 20 -213 13 -115 23 -218 24 -227 0 -16 11 -18
79 -18 l78 0 6 -37 c13 -88 19 -183 11 -183 -5 0 -85 -9 -179 -19 -93 -11
-171 -18 -172 -17 -4 4 -124 1138 -121 1141 2 2 38 6 80 10 l77 7 22 -75 c22
-75 23 -75 53 -71 49 7 869 94 887 94 14 0 18 15 24 79 l7 80 56 6 c32 3 64 8
72 9 8 2 18 4 22 5 4 0 10 -9 12 -21z m-18615 -1339 l14 -76 270 -6 c149 -4
361 -7 473 -7 l203 0 12 75 12 75 85 0 85 0 -6 -152 c-4 -83 -7 -220 -7 -305
l0 -154 -82 3 -83 3 -11 73 c-6 39 -13 74 -16 77 -9 9 -933 21 -939 12 -3 -4
-12 -40 -19 -78 l-12 -70 -80 3 -80 3 2 294 c0 162 3 298 6 303 3 5 40 8 82 6
l77 -3 14 -76z m17588 -44 c6 -2 14 -36 18 -79 l7 -76 31 0 c36 0 801 -38 868
-43 l46 -4 17 78 17 77 77 -5 c42 -3 79 -7 81 -9 5 -4 -16 -445 -29 -637 -5
-70 -17 -155 -25 -189 -35 -133 -115 -246 -210 -296 -45 -24 -61 -27 -155 -27
-96 0 -109 2 -152 27 -52 31 -93 79 -130 151 l-24 48 -24 -51 c-31 -66 -98
-126 -163 -145 -31 -9 -91 -15 -154 -15 -117 0 -136 -10 -149 -74 l-6 -36 -57
0 c-107 0 -104 -3 -98 119 7 162 37 223 127 264 37 17 66 21 170 22 140 1 170
10 214 67 33 45 44 92 52 239 l7 127 -109 6 c-60 3 -137 9 -171 11 l-62 5 -10
-37 c-5 -21 -13 -56 -18 -78 l-9 -40 -79 4 c-44 1 -81 4 -82 5 -4 3 27 579 32
592 3 11 117 10 152 -1z m-17598 -765 c19 -59 26 -70 44 -70 12 0 260 32 550
70 290 39 533 70 540 70 15 0 54 -270 42 -289 -3 -6 -180 -162 -393 -347 -213
-185 -388 -340 -390 -343 -1 -4 57 0 130 10 73 10 226 30 339 45 l207 27 6 36
c3 20 6 55 6 78 0 47 1 48 97 58 l62 7 5 -34 c5 -28 76 -556 76 -564 0 -1 -28
-5 -62 -9 -35 -3 -70 -9 -80 -11 -12 -4 -21 10 -38 63 -12 37 -26 72 -30 76
-3 4 -211 -20 -461 -53 -250 -33 -457 -60 -460 -60 -4 0 -10 -36 -14 -79 l-7
-79 -75 -11 c-42 -6 -78 -9 -80 -7 -3 2 -18 103 -34 223 l-29 218 30 25 c181
152 765 666 759 668 -8 3 -613 -74 -656 -83 -20 -5 -22 -12 -25 -83 l-3 -77
-78 -9 c-42 -5 -79 -7 -81 -5 -7 7 -78 558 -74 577 3 17 43 28 119 31 35 1 35
1 58 -69z m17404 -1080 c60 -19 68 -25 64 -44 -3 -11 -8 -46 -12 -76 l-7 -56
439 -138 c241 -77 443 -141 449 -143 6 -2 28 27 48 66 l36 70 72 -25 c39 -13
73 -26 76 -28 5 -6 -147 -488 -159 -500 -5 -6 -229 -22 -498 -37 -269 -15
-500 -29 -512 -31 -18 -2 62 -71 382 -327 l405 -324 -79 -251 c-44 -138 -82
-253 -84 -255 -2 -3 -37 6 -79 19 l-76 24 7 56 c3 30 9 65 12 77 5 24 59 5
-641 228 -132 42 -245 74 -252 71 -7 -3 -27 -32 -44 -66 -17 -33 -33 -60 -36
-60 -24 0 -144 44 -144 53 0 9 169 554 175 564 0 1 34 -8 75 -21 84 -26 81
-20 66 -127 l-7 -56 78 -22 c61 -18 418 -147 638 -231 26 -10 28 -9 15 3 -11
10 -781 640 -799 653 -1 2 11 46 29 98 22 66 36 96 47 96 29 0 1017 71 1020
73 1 1 -116 33 -260 71 -144 38 -309 84 -367 102 -58 19 -110 34 -115 34 -6 0
-25 -29 -43 -65 -17 -36 -38 -65 -45 -65 -7 0 -43 10 -79 23 l-66 22 91 288
c51 158 96 286 102 284 5 -2 41 -14 78 -27z m-15749 -1181 c101 -272 187 -501
191 -510 5 -13 -8 -22 -62 -43 -38 -14 -73 -26 -79 -26 -5 0 -27 29 -47 65
l-37 65 -83 -30 c-45 -17 -242 -90 -437 -163 l-355 -133 1 -29 c0 -17 4 -52 8
-80 l8 -50 -75 -27 -75 -26 -77 206 c-43 114 -90 241 -106 283 l-28 77 76 27
c62 23 77 25 84 14 5 -8 23 -38 40 -66 17 -29 32 -53 34 -53 9 0 850 313 857
319 6 5 -122 364 -134 376 -2 3 -37 -5 -77 -16 -40 -11 -77 -17 -81 -12 -10
10 -81 196 -76 200 5 5 341 130 344 128 1 -1 85 -224 186 -496z m15454 -809
c144 -40 300 -134 392 -237 58 -65 122 -189 145 -278 45 -178 -13 -404 -150
-577 -114 -145 -305 -238 -490 -238 -221 0 -486 143 -608 328 -130 195 -142
429 -34 643 125 251 316 376 572 378 72 1 121 -5 173 -19z m-15280 -33 c145
-42 266 -135 355 -272 84 -130 122 -251 121 -386 -2 -259 -169 -487 -446 -607
-195 -84 -374 -81 -555 8 -181 89 -326 296 -363 519 -34 203 55 431 223 573
197 164 449 227 665 165z m1066 -1366 c175 -222 320 -409 322 -416 7 -16 -92
-95 -120 -95 -88 -1 -1168 -49 -1171 -52 -6 -5 265 -348 275 -348 5 0 36 16
69 36 48 28 64 34 75 25 33 -28 128 -163 120 -171 -5 -4 -72 -51 -148 -104
-113 -78 -142 -94 -152 -84 -24 24 -634 803 -633 808 0 3 23 22 51 44 l51 38
556 24 c306 13 577 24 603 26 l48 3 -146 185 c-80 102 -149 189 -154 194 -5 5
-36 -7 -73 -28 -36 -20 -68 -36 -71 -36 -10 0 -137 163 -134 171 2 5 68 54
148 109 114 79 146 98 156 88 6 -7 154 -195 328 -417z m13357 223 c97 -77 108
-88 96 -103 -8 -9 -40 -49 -71 -89 l-57 -73 -87 47 -86 47 -55 -29 c-121 -63
-251 -233 -251 -329 0 -76 71 -145 150 -145 49 0 138 46 260 134 206 149 377
218 485 196 151 -31 255 -160 255 -314 -1 -271 -269 -601 -562 -692 l-56 -17
-94 73 c-51 41 -99 79 -107 86 -11 10 -2 26 49 90 34 44 65 83 70 87 4 5 46
-11 92 -34 l86 -42 66 47 c122 87 206 215 206 315 0 49 -3 57 -39 92 -32 32
-46 39 -77 39 -53 0 -138 -43 -269 -135 -198 -140 -322 -196 -435 -197 -148 0
-272 91 -314 232 -21 70 -20 111 4 204 47 183 200 384 380 498 68 44 189 93
238 97 8 0 63 -38 123 -85z m-8733 -2310 c113 -28 234 -86 315 -149 l57 -45 0
-175 0 -175 -124 0 -124 0 -16 68 c-8 37 -18 87 -22 110 -8 53 -30 75 -103
104 -48 20 -75 23 -191 23 -133 0 -137 -1 -201 -32 -119 -59 -202 -172 -246
-333 -22 -83 -25 -375 -4 -460 36 -148 131 -273 248 -328 55 -26 66 -27 208
-27 133 0 155 2 198 22 l47 22 0 140 0 140 -42 5 c-24 3 -78 8 -120 12 l-78 6
0 119 0 119 290 0 290 0 0 -325 0 -324 -52 -40 c-96 -71 -230 -126 -368 -152
-108 -20 -331 -15 -421 9 -267 72 -460 274 -531 557 -19 77 -22 116 -22 270 0
195 15 283 69 416 99 244 314 413 575 450 90 13 262 0 368 -27z m5873 5 c271
-75 476 -315 534 -624 24 -125 17 -376 -14 -490 -57 -218 -200 -405 -381 -499
-218 -114 -522 -108 -727 16 -165 99 -294 282 -348 493 -39 154 -39 384 1 543
67 265 257 482 485 553 137 43 314 46 450 8z m3154 10 c130 -22 284 -86 383
-160 l52 -40 -2 -172 -3 -172 -126 -3 c-125 -3 -127 -2 -132 20 -3 13 -13 67
-23 120 l-18 97 -39 16 c-114 46 -296 59 -395 30 -93 -28 -152 -99 -152 -184
0 -113 74 -165 375 -266 93 -31 205 -75 248 -98 201 -107 299 -266 284 -462
-18 -237 -206 -392 -518 -426 -240 -26 -497 43 -664 178 l-60 49 -3 177 -2
177 133 0 134 0 17 -119 18 -119 47 -25 c82 -45 156 -61 276 -61 93 0 118 3
160 22 65 30 91 55 111 109 23 59 13 135 -23 187 -39 55 -117 94 -318 161
-226 75 -350 139 -436 224 -90 90 -113 149 -113 286 0 125 23 190 95 269 153
168 401 234 694 185z m-15560 -42 c109 -37 173 -76 258 -156 83 -80 136 -163
175 -276 27 -80 27 -81 27 -370 0 -289 0 -290 -27 -370 -39 -113 -92 -196
-175 -276 -85 -80 -149 -119 -258 -156 l-80 -28 -457 -3 -458 -3 0 100 c0 114
-13 100 110 124 l65 13 0 599 0 600 -85 15 -85 15 -3 103 -3 103 458 -3 458
-3 80 -28z m1630 4 c99 -33 160 -66 212 -114 85 -78 128 -162 142 -276 22
-178 -48 -323 -199 -409 l-52 -30 55 -25 c150 -69 217 -202 217 -434 0 -71 3
-85 23 -109 15 -17 38 -29 63 -33 l39 -6 3 -103 3 -102 -124 0 c-133 0 -197
13 -243 49 -70 55 -104 149 -104 286 0 182 -32 258 -129 308 -53 26 -59 27
-223 27 l-168 0 2 -217 3 -217 65 -13 c123 -24 110 -10 110 -123 l0 -100 -350
0 -350 0 0 100 c0 113 -13 99 110 123 l65 13 0 599 0 600 -85 15 -85 15 -3
103 -3 103 468 -3 c459 -3 469 -4 538 -27z m1943 -198 l-3 -228 -130 0 c-123
0 -130 1 -132 20 -1 11 -5 55 -8 98 l-7 77 -264 0 -264 0 0 -210 0 -210 285 0
286 0 -3 -127 -3 -128 -282 -3 -283 -2 0 -235 0 -235 268 2 267 3 2 35 c2 19
6 63 9 98 l6 62 129 0 129 0 0 -230 0 -230 -665 0 -665 0 0 100 c0 113 -13 99
110 123 l65 13 0 599 0 600 -85 15 -85 15 -3 103 -3 102 666 0 665 0 -2 -227z
m850 125 l-3 -103 -85 -15 -85 -15 0 -490 0 -490 23 -50 c29 -63 64 -100 127
-133 46 -25 59 -27 175 -27 109 0 131 3 171 22 56 28 104 74 132 127 22 41 22
47 22 541 l0 499 -80 16 -80 16 -3 102 -3 102 346 0 346 0 -3 -102 -3 -102
-65 -13 c-36 -7 -75 -15 -87 -18 l-23 -5 0 -483 c0 -390 -3 -494 -15 -545 -56
-237 -253 -388 -552 -422 -308 -36 -602 87 -707 294 -59 117 -59 119 -65 661
l-6 500 -85 16 -85 15 -3 102 -3 102 351 0 351 0 -3 -102z m3980 -125 l-3
-228 -130 0 c-123 0 -130 1 -132 20 -1 11 -5 55 -8 98 l-7 77 -264 0 -264 0 0
-210 0 -210 285 0 286 0 -3 -127 -3 -128 -282 -3 -283 -2 0 -235 0 -235 268 2
267 3 2 35 c2 19 6 63 9 98 l6 62 129 0 129 0 0 -230 0 -230 -665 0 -665 0 0
100 c0 113 -13 99 110 123 l65 13 0 599 0 600 -85 15 -85 15 -3 103 -3 102
666 0 665 0 -2 -227z m1350 125 l-3 -103 -68 -11 c-37 -6 -69 -13 -72 -16 -6
-5 170 -860 183 -890 4 -11 63 190 162 552 l155 570 126 0 125 0 154 -557 c84
-307 156 -564 159 -570 4 -7 49 190 100 438 51 247 91 453 87 456 -3 4 -36 11
-73 17 l-68 11 -3 103 -3 102 311 0 311 0 -3 -102 -3 -103 -65 -8 c-35 -4 -65
-9 -67 -10 -1 -2 -78 -328 -170 -725 l-168 -722 -157 0 -157 0 -16 53 c-8 28
-78 277 -154 552 -77 275 -140 498 -141 495 -1 -3 -70 -250 -153 -550 l-152
-545 -157 -3 -157 -3 -10 38 c-6 21 -80 337 -166 703 -86 366 -158 675 -161
687 -5 18 -15 23 -52 28 -100 13 -92 3 -92 115 l0 100 310 0 311 0 -3 -102z
m4347 73 c99 -33 160 -66 212 -114 85 -78 128 -162 142 -276 22 -178 -48 -323
-199 -409 l-52 -30 55 -25 c150 -69 217 -202 217 -434 0 -71 3 -85 23 -109 15
-17 38 -29 63 -33 l39 -6 3 -103 3 -102 -124 0 c-133 0 -197 13 -243 49 -70
55 -104 149 -104 286 0 182 -32 258 -129 308 -53 26 -59 27 -223 27 l-168 0 2
-217 3 -217 65 -13 c123 -24 110 -10 110 -123 l0 -100 -350 0 -350 0 0 100 c0
113 -13 99 110 123 l65 13 0 599 0 600 -85 15 -85 15 -3 103 -3 103 468 -3
c459 -3 469 -4 538 -27z m3513 -193 l-3 -223 -124 -3 c-93 -2 -126 1 -133 10
-4 7 -8 36 -8 64 0 28 -3 66 -6 83 l-6 31 -149 0 -149 0 2 -587 3 -587 65 -13
c123 -24 110 -10 110 -123 l0 -100 -350 0 -351 0 3 102 3 102 85 15 85 16 3
588 2 587 -149 0 -148 0 -7 -31 c-3 -17 -6 -55 -6 -83 0 -28 -4 -57 -8 -64 -7
-9 -40 -12 -133 -10 l-124 3 -3 223 -2 222 750 0 750 0 -2 -222z m-10905
-2136 l47 -24 0 -59 0 -59 -35 0 c-36 0 -38 3 -49 52 -5 22 -15 30 -48 39 -72
19 -138 -8 -138 -57 0 -33 30 -57 107 -84 127 -43 173 -87 173 -165 0 -92 -67
-140 -195 -140 -69 1 -87 5 -132 29 l-53 29 0 59 0 58 40 0 c37 0 40 -2 40
-27 0 -36 9 -49 43 -62 50 -19 105 -14 132 14 50 49 18 92 -98 131 -60 20 -92
37 -119 64 -34 34 -38 43 -38 88 0 57 31 104 85 128 48 22 179 14 238 -14z
m307 -7 c0 -31 -3 -35 -25 -35 l-25 0 0 -189 0 -189 25 -6 c20 -5 25 -13 25
-36 l0 -30 -105 0 -105 0 0 29 c0 23 6 31 30 40 l30 10 -2 183 -3 183 -27 3
c-25 3 -28 8 -28 38 l0 34 105 0 105 0 0 -35z m315 -142 l105 -177 0 142 0
142 -25 0 c-22 0 -25 4 -25 35 l0 35 105 0 105 0 0 -34 c0 -30 -3 -35 -27 -38
l-28 -3 -3 -222 -2 -223 -50 0 -49 0 -97 163 c-53 89 -101 166 -105 172 -5 5
-9 -51 -9 -127 l0 -136 25 -6 c20 -5 25 -13 25 -36 l0 -30 -105 0 -105 0 0 29
c0 23 6 31 30 40 l30 10 -2 183 -3 183 -27 3 c-25 3 -28 8 -28 38 l0 34 80 0
80 0 105 -177z m668 144 l47 -28 0 -59 0 -60 -35 0 c-30 0 -35 4 -41 28 -10
49 -13 53 -50 68 -131 55 -233 -104 -176 -271 21 -60 66 -95 124 -95 49 0 98
25 98 49 0 38 11 51 46 51 l34 0 0 -53 c0 -59 -8 -71 -70 -103 -24 -12 -58
-18 -110 -18 -65 -1 -82 3 -123 27 -84 50 -122 134 -115 256 5 84 27 138 75
183 47 45 90 59 173 56 61 -3 84 -8 123 -31z m507 -37 l0 -70 -40 0 c-38 0
-40 2 -40 30 l0 30 -85 0 -85 0 0 -65 0 -65 85 0 85 0 0 -40 0 -40 -85 0 -85
0 0 -75 0 -75 85 0 85 0 0 30 c0 28 2 30 40 30 l40 0 0 -70 0 -70 -205 0 -205
0 0 29 c0 23 6 31 30 40 l30 10 0 181 0 181 -30 10 c-24 9 -30 17 -30 40 l0
29 205 0 205 0 0 -70z m831 47 c18 -12 44 -40 56 -62 20 -36 23 -54 23 -173 0
-113 -3 -139 -20 -171 -37 -74 -111 -108 -205 -96 -67 8 -77 15 -69 52 l6 31
62 -5 c55 -5 65 -3 90 18 19 17 29 37 33 69 l6 45 -21 -19 c-12 -10 -40 -20
-64 -23 -146 -15 -222 183 -116 303 40 45 58 53 129 53 42 1 64 -5 90 -22z
m402 9 c42 -18 67 -47 77 -91 11 -47 -5 -101 -37 -131 l-25 -23 31 -26 c45
-39 59 -92 37 -149 -21 -54 -61 -82 -131 -91 -64 -9 -132 9 -168 43 -57 54
-55 149 5 196 l32 24 -32 36 c-26 30 -32 45 -32 84 0 58 28 108 73 127 41 18
129 19 170 1z m437 -151 l0 -165 30 0 c28 0 30 -3 30 -35 0 -32 -2 -35 -30
-35 -25 0 -30 -4 -30 -25 0 -20 6 -27 30 -31 25 -5 30 -11 30 -35 l0 -29 -110
0 -110 0 0 29 c0 24 5 30 30 35 24 4 30 11 30 31 l0 25 -104 0 c-102 0 -104 1
-110 24 -5 19 13 55 80 163 147 236 127 213 184 213 l50 0 0 -165z m-1240 -64
l0 -220 45 -7 c41 -6 45 -9 45 -35 l0 -29 -140 0 -140 0 0 29 c0 26 4 29 45
35 l45 7 0 175 0 174 -45 0 c-43 0 -45 1 -45 29 0 28 2 29 78 44 42 8 85 15
95 16 16 1 17 -16 17 -218z"
        />
        <path
          d="M11238 19309 c-54 -115 -98 -214 -98 -219 0 -6 6 -10 14 -10 19 0
211 -19 262 -25 l41 -6 -54 228 c-31 125 -58 231 -62 235 -3 4 -50 -88 -103
-203z"
        />
        <path
          d="M4606 14684 c-12 -92 -6 -252 19 -454 23 -186 25 -242 25 -595 0
-508 14 -724 65 -1020 55 -323 147 -529 315 -708 210 -225 560 -381 759 -338
132 28 217 94 369 286 463 584 963 995 1558 1282 177 85 214 117 214 186 0 58
-35 111 -146 223 -162 164 -340 291 -555 399 -273 138 -448 178 -969 225 -422
38 -798 103 -1015 174 -222 74 -392 171 -561 322 l-71 64 -7 -46z"
        />
        <path
          d="M16180 14662 c-65 -53 -165 -119 -260 -174 -338 -194 -715 -293
-1255 -328 -209 -14 -374 -35 -508 -65 -321 -73 -632 -220 -872 -414 -107 -86
-333 -316 -341 -346 -14 -55 -2 -65 236 -205 556 -326 1071 -791 1523 -1373
102 -131 141 -169 217 -207 180 -91 470 -54 718 92 83 48 250 218 301 305 89
151 113 240 160 593 62 467 100 875 121 1289 12 239 13 861 2 861 -4 0 -23
-13 -42 -28z"
        />
        <path
          d="M18847 12950 c-236 -65 -430 -120 -433 -122 -6 -7 56 -219 77 -260
31 -61 84 -113 142 -139 84 -38 187 -33 362 17 207 60 265 96 320 196 42 74
42 171 0 321 -16 59 -32 107 -35 106 -3 -1 -198 -54 -433 -119z"
        />
        <path
          d="M11873 10810 c-87 -18 -150 -65 -172 -129 -15 -47 -14 -76 8 -163 56
-218 196 -395 390 -491 74 -37 93 -42 150 -42 50 0 80 7 123 27 61 28 141 96
163 138 36 70 22 213 -32 312 -113 208 -437 387 -630 348z"
        />
        <path
          d="M19287 10084 c-10 -111 -8 -203 3 -246 37 -133 207 -173 302 -72 41
44 56 100 64 242 l7 130 -109 6 c-60 4 -143 9 -185 12 l-76 6 -6 -78z"
        />
        <path
          d="M17919 6550 c-102 -18 -187 -91 -242 -208 -58 -124 -40 -245 56 -364
43 -53 117 -109 217 -162 256 -136 469 -88 577 130 32 65 36 84 36 147 0 59
-5 82 -28 127 -39 78 -87 133 -158 184 -159 113 -333 168 -458 146z"
        />
        <path
          d="M2765 6516 c-180 -41 -373 -178 -441 -313 -25 -51 -29 -69 -29 -143
0 -76 4 -91 33 -148 40 -77 91 -135 150 -169 35 -21 62 -27 122 -31 92 -5 159
8 256 53 150 69 267 168 320 272 25 50 29 69 29 138 0 68 -5 89 -30 140 -38
79 -113 157 -176 184 -63 28 -158 34 -234 17z"
        />
        <path
          d="M14195 3066 c-112 -35 -176 -94 -231 -210 -50 -106 -66 -195 -67
-371 0 -119 5 -168 21 -237 40 -165 109 -266 220 -320 63 -31 72 -33 177 -33
119 0 166 14 240 70 91 70 158 229 174 413 31 353 -81 618 -287 682 -73 23
-185 26 -247 6z"
        />
        <path
          d="M1640 2485 l0 -577 163 4 c150 3 166 5 218 30 105 48 184 157 209
287 13 70 13 442 0 512 -24 128 -105 239 -208 287 -53 25 -69 27 -219 30
l-163 4 0 -577z"
        />
        <path
          d="M3260 2824 l0 -236 178 4 179 3 49 30 c70 44 98 99 98 190 0 121 -54
199 -160 231 -32 9 -96 14 -196 14 l-148 0 0 -236z"
        />
        <path
          d="M15730 2824 l0 -236 178 4 179 3 49 30 c70 44 98 99 98 190 0 121
-54 199 -160 231 -32 9 -96 14 -196 14 l-148 0 0 -236z"
        />
        <path
          d="M11332 913 c-50 -20 -56 -163 -8 -195 19 -13 60 -9 84 8 18 12 22 25
22 69 0 65 -14 99 -47 114 -26 12 -31 12 -51 4z"
        />
        <path
          d="M11732 897 c-43 -45 -18 -127 38 -127 55 0 82 88 40 130 -26 26 -52
25 -78 -3z"
        />
        <path
          d="M11720 670 c-44 -44 -13 -130 48 -130 46 0 72 25 72 71 0 48 -27 79
-70 79 -17 0 -39 -9 -50 -20z"
        />
        <path
          d="M12128 755 l-57 -95 59 0 60 0 0 95 c0 52 -1 95 -2 95 -2 -1 -29 -43
-60 -95z"
        />
      </g>
    </svg>
  );
}
