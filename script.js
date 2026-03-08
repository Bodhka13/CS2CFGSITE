const statusText = document.getElementById('status');
const generateBtn = document.getElementById('generateBtn');
const fileInfo = document.getElementById('fileInfo');

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randFloat = (min, max, digits = 2) => (Math.random() * (max - min) + min).toFixed(digits);

function makeCfg() {
  const radarA = randFloat(0.2, 0.35, 2);
  const radarB = randFloat(0.4, 0.6, 2);
  const cR = randInt(0, 255);
  const cG = randInt(0, 255);
  const cB = randInt(0, 255);

  const cfg = [
    '// Rates',
    'rate "786432"',
    `cl_interp "${random(['0.015625', '0.031', '0.046875'])}"`,
    `cl_interp_ratio "${random(['1', '2'])}"`,
    '',
    '// Mouse',
    `sensitivity "${randFloat(0.7, 2.4, 2)}"`,
    `m_pitch "${random(['0.022', '0.020', '0.018'])}"`,
    '',
    '// Video',
    `fps_max "${random(['0', '300', '400'])}"`,
    `r_drawtracers_firstperson "${random(['0', '1'])}"`,
    `r_fullscreen_gamma ${randFloat(1.9, 2.8, 1)}`,
    '',
    '// Audio',
    `volume "${randFloat(0.05, 1, 2)}"`,
    `snd_musicvolume "${random(['0', '0.02', '0.05', '0.1'])}"`,
    `snd_mixahead "${random(['0.001', '0.01', '0.025'])}"`,
    `snd_headphone_pan_exponent "${random(['1', '2'])}"`,
    `snd_headphone_pan_radial_weight "${random(['0.5', '1', '2'])}"`,
    `cl_mute_all_but_friends_and_party "${random(['0', '1'])}"`,
    `voice_threshold ${random(['-120', '-90', '-60'])}`,
    '',
    '// HUD',
    `hud_scaling "${randFloat(0.8, 1.0, 2)}"`,
    `hud_showtargetid "${random(['0', '1'])}"`,
    `cl_hud_color "${randInt(0, 10)}"`,
    `cl_hud_radar_scale "${random(['0.8', '0.9', '1'])}"`,
    `cl_draw_only_deathnotices "${random(['0', '1'])}"`,
    `cl_showloadout "${random(['0', '1'])}"`,
    `cl_showpos "${random(['0', '1'])}"`,
    `cl_showfps "${random(['0', '1'])}"`,
    `cl_teamid_overhead_mode "${random(['1', '2', '3'])}"`,
    '',
    '// Radar',
    `cl_radar_always_centered "${random(['0', '1'])}"`,
    `cl_radar_rotate "${random(['0', '1'])}"`,
    `cl_radar_scale "${radarA}"`,
    `cl_radar_icon_scale_min "${randFloat(0.4, 1.0, 2)}"`,
    `cl_radar_square_with_scoreboard "${random(['0', '1'])}"`,
    `bind "z" "toggle cl_radar_scale ${radarA} ${radarB}"`,
    '',
    '// Viewmodel',
    `viewmodel_fov "${randInt(54, 68)}"`,
    `viewmodel_offset_x "${randFloat(-2.5, 2.5, 1)}"`,
    `viewmodel_offset_y "${randFloat(-2, 2, 1)}"`,
    `viewmodel_offset_z "${randFloat(-2, 2, 1)}"`,
    `viewmodel_presetpos ${random(['0', '1', '2'])}`,
    '',
    '// Crosshair',
    `cl_crosshairstyle ${random(['2', '3', '4', '5'])}`,
    `cl_crosshairsize ${randFloat(1, 4, 1)}`,
    `cl_crosshairthickness ${randFloat(0, 1, 1)}`,
    `cl_crosshairgap ${randFloat(-3, 2, 1)}`,
    `cl_crosshair_drawoutline ${random(['0', '1'])}`,
    `cl_crosshair_outlinethickness ${randFloat(0, 1, 1)}`,
    `cl_crosshairdot ${random(['0', '1'])}`,
    `cl_crosshair_t ${random(['0', '1'])}`,
    `cl_crosshairusealpha ${random(['0', '1'])}`,
    `cl_crosshairalpha ${randInt(120, 255)}`,
    `cl_crosshaircolor_r ${cR}`,
    `cl_crosshaircolor_g ${cG}`,
    `cl_crosshaircolor_b ${cB}`,
    `cl_crosshair_recoil ${random(['0', '1'])}`,
    `cl_crosshairgap_useweaponvalue ${random(['0', '1'])}`,
    `cl_crosshaircolor ${randInt(0, 5)}`,
    `cl_crosshair_dynamic_maxdist_splitratio ${randFloat(0.1, 0.7, 1)}`,
    `cl_crosshair_dynamic_splitdist ${randInt(3, 12)}`,
    `cl_crosshair_dynamic_splitalpha_innermod ${randFloat(0.1, 1, 1)}`,
    `cl_crosshair_dynamic_splitalpha_outermod ${randFloat(0.1, 1, 1)}`,
    '',
    '//EXTRAS',
    `cl_crosshair_sniper_width ${randInt(1, 3)}`,
    `r_show_build_info ${random(['true', 'false'])}`,
    '',
    '// Misc',
    'developer "0"',
    'con_enable "1"',
    'ui_steam_overlay_notification_position "bottomright"',
    'player_nevershow_communityservermessage "1"',
    `mm_dedicated_search_maxping "${randInt(40, 120)}"`,
    'gameinstructor_enable "0"',
    `option_duck_method "${random(['0', '1'])}"`,
    `option_speed_method "${random(['0', '1'])}"`,
    `cl_join_advertise "${random(['0', '1', '2'])}"`,
    `cl_autohelp "${random(['0', '1'])}"`,
    `cl_teammate_colors_show "${random(['0', '1'])}"`,
    `cl_use_opens_buy_menu "${random(['0', '1'])}"`,
    `rcon_password "${random(['hygge', 'redcfg', 'fragmode', 'trainhard'])}"`,
    'password ""',
    '',
    '// Binds',
    'bind "0" "slot10"',
    'bind "1" "slot1"',
    'bind "2" "slot2"',
    'bind "3" "slot3"',
    'bind "4" "slot4"',
    'bind "5" "slot5"',
    'bind "6" "slot6"',
    'bind "7" "slot7"',
    'bind "8" "slot8"',
    'bind "9" "slot9"',
    'bind "a" "+left"',
    'bind "b" "buymenu"',
    'bind "d" "+right"',
    'bind "e" "+use"',
    'bind "f" "+lookatweapon"',
    'bind "g" "drop"',
    'bind "n" "noclip"',
    'bind "l" "lefthand1"',
    'bind "m" "teammenu"',
    'bind "q" "lastinv"',
    'bind "r" "+reload"',
    'bind "s" "+back"',
    'bind "u" "messagemode2"',
    'bind "w" "+forward"',
    'bind "y" "messagemode"',
    'bind "MOUSE4" "slot10"',
    'bind "MOUSE3" "slot7"',
    'bind "MOUSE5" "slot8"',
    'bind "c" "+voicerecord"',
    'bind "x" "player_ping"',
    `bind "i" "say ${random(['Бро, надо тренироваться!', 'Фокус на аим и тайминги!', 'Играем до победы!', 'Работаем по инфе!'])}"`,
    `bind "z" "toggle cl_radar_scale ${radarA} ${radarB}"`,
    'bind "t" "+spray_menu"',
    'bind "v" "+dropc4"',
    'bind "h" "toggle voice_modenable"',
    'bind "SPACE" "+jump"',
    'bind "TAB" "+showscores"',
    'bind "ESCAPE" "cancelselect"',
    'bind "DEL" "mute"',
    'bind "PAUSE" "pause"',
    'bind "SHIFT" "+sprint"',
    'bind "CTRL" "+duck"',
    'bind "F4" "rebuy"',
    'bind "MOUSE1" "+attack"',
    'bind "MOUSE2" "+attack2"',
    'bind "MWHEELDOWN" "+jump"',
    `bind "j" "toggle volume ${randFloat(0.01, 0.2, 2)} ${randFloat(0.3, 0.7, 2)} 1"`,
    'bind "[" "bot_kick; sv_grenade_trajectory_prac_pipreview 1; sv_grenade_trajectory_prac_trailtime 4; mp_buy_anywhere 1; mp_freezetime 0; mp_ignore_round_win_conditions 1; mp_buytime 99999; mp_startmoney 60000; mp_maxmoney 60000; ammo_grenade_limit_total 6; mp_warmup_pausetimer 1; mp_warmup_start; sv_cheats 1; sv_infinite_ammo 1;"',
    'bind "]" "toggle host_timescale 1 20"',
    'bind "UPARROW" "demo_pause"',
    'bind "DOWNARROW" "demo_resume"',
    'bind "/" "ent_fire smokegrenade_projectile kill; stopsound"',
    '',
    '// Alias',
    'alias "+dropc4" "slot5;"',
    'alias "-dropc4" "drop;"'
  ];

  return {
    text: cfg.join('\n'),
    hudColor: cfg.find((line) => line.startsWith('cl_hud_color'))?.split('"')[1] || '-',
    sens: cfg.find((line) => line.startsWith('sensitivity'))?.split('"')[1] || '-'
  };
}

function makeFileName() {
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
    String(now.getHours()).padStart(2, '0'),
    String(now.getMinutes()).padStart(2, '0'),
    String(now.getSeconds()).padStart(2, '0')
  ].join('');
  return `random_cs2_${stamp}.cfg`;
}

function downloadCfg(text, fileName) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function onGenerateClick() {
  try {
    const cfg = makeCfg();
    const fileName = makeFileName();
    downloadCfg(cfg.text, fileName);
    statusText.textContent = `Скачано: ${fileName}`;
    fileInfo.textContent = `${fileName} | sensitivity ${cfg.sens} | hud ${cfg.hudColor}`;
  } catch (error) {
    statusText.textContent = 'Ошибка генерации конфига. Обнови страницу.';
    fileInfo.textContent = String(error);
  }
}

if (generateBtn) {
  generateBtn.addEventListener('click', onGenerateClick);
}
