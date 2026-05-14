// ============================================================
// POLLY CONTACT DIRECTORY — APP LOGIC
// ============================================================

const AVATAR_COLORS = [
  ['#dbeafe','#1e40af'],['#dcfce7','#166534'],['#fef3c7','#92400e'],
  ['#fce7f3','#9d174d'],['#ede9fe','#5b21b6'],['#ffedd5','#9a3412'],
  ['#e0f2fe','#0c4a6e'],['#d1fae5','#065f46'],
];

function avatarColor(name) {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
  return AVATAR_COLORS[h % AVATAR_COLORS.length];
}

function initials(name) {
  return name.split(/\s+/).map(w => w[0] || '').join('').substring(0, 2).toUpperCase();
}

const LOGO_MAP = {
  'AAA':                                    'aaa new.png',
  'American Integrity':                     'ai.png',
  'Arbella':                                'arbella logo.png',
  'Branch':                                 'branch.png',
  'Bristol West':                           'bw.png',
  'Bristol West (Billing Only)':            'bw.png',
  'Cincinnati':                             'cincinnati.png',
  'Concord':                                'concord.png',
  'Countryway':                             'country.png',
  'Foremost Signature':                     'foremost.png',
  'Foremost STAR':                          'foremost.png',
  'Gainsco':                                'gainsco.png',
  'The General':                            'general.png',
  'Good2Go':                                'good2go.png',
  'Grange':                                 'grange.png',
  'Hartford':                               'the hartford.png',
  'Johnson & Johnson':                      'johnson.png',
  'Kemper':                                 'kemepr.png',
  'Kemper Infinity':                        'kemepr.png',
  'Kemper Preferred':                       'kemepr.png',
  'Lemonade':                               'lemonade.png',
  'Loggerhead':                             'loggerhead.png',
  'Mapfre / Commerce':                      'mapfre logo.png',
  'Mercury':                                'mercury.png',
  'Maine Mutual Group':                     'mmg.png',
  'Nationwide':                             'nationwide.png',
  'New England Excess Exchange':            'neee.png',
  'NYCM':                                   'nycm.png',
  'Ohio Mutual':                            'omig.png',
  'Openly':                                 'openly.png',
  'Plymouth Rock':                          'plymouth.png',
  'Progressive':                            'progress.png',
  'PURE':                                   'pure.png',
  'Vermont Mutual':                         'real vermont.png',
  'Liberty Mutual (Safeco)':               'safeco (2).png',
  'Slide':                                  'slide.png',
  'Travelers':                              'travelers.png',
  'Utica National':                         'utica.png',
};

function avatarHtml(name, forModal) {
  const [bg, fg] = avatarColor(name);
  const logoFile = LOGO_MAP[name];
  const bgStyle = forModal ? 'background:rgba(255,255,255,0.12)' : `background:#f0f5ff;color:${fg}`;
  const cls = forModal ? 'modal-avatar' : 'card-avatar';
  const pad = forModal ? '5' : '5';
  const ini = initials(name);
  const fallback = `this.style.display='none';this.parentNode.style.background='${bg}';this.parentNode.style.color='${fg}';this.parentNode.textContent='${ini}'`;
  const imgTag = logoFile
    ? `<img src="Logo/${logoFile}" alt="${name} logo" style="width:100%;height:100%;object-fit:contain;padding:${pad}px" onerror="${fallback}">`
    : '';
  const fallbackContent = logoFile ? '' : ini;
  const fallbackStyle = logoFile ? bgStyle : `background:${bg};color:${fg}`;
  return `<div class="${cls}" style="${logoFile ? bgStyle : fallbackStyle}">${imgTag}${fallbackContent}</div>`;
}

function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function makeLink(text) {
  // Converts emails and URLs to clickable links, handles \n as line breaks
  return escHtml(text)
    .replace(/\n/g, '<br>')
    .replace(/([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})/g,
      '✉️ <a href="mailto:$1">$1</a>')
    .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank">$1</a>');
}

// ===== CARRIER CARDS =====

function buildServiceText(sc) {
  if (!sc) return '';
  const parts = [];
  if (sc.phone) parts.push(sc.phone);
  if (sc.email) parts.push(sc.email);
  if (sc.note) parts.push(sc.note);
  return parts.join(' · ');
}

function serviceBadges(sc) {
  if (!sc) return '';
  let badges = '';
  if (sc.spanish) badges += '<span class="info-badge spanish-badge">🌐 Spanish</span>';
  if (sc.hours) badges += `<span class="info-badge hours-badge">${escHtml(sc.hours)}</span>`;
  return badges;
}

function agentBadges(ag) {
  if (!ag) return '';
  let badges = '';
  if (ag.chat) badges += '<span class="info-badge chat-badge">💬 Chat</span>';
  return badges;
}

function renderCarrierCards(list, gridId) {
  const grid = document.getElementById(gridId || 'carrierGrid');
  const noRes = document.getElementById('carrierNoResults');
  const count = document.getElementById('carrierCount');

  if (!gridId && count) count.textContent = list.length + ' carrier' + (list.length === 1 ? '' : 's');
  if (!gridId && noRes) noRes.style.display = list.length === 0 ? 'block' : 'none';

  grid.innerHTML = list.map((c) => {
    const idx = window.CARRIERS.indexOf(c);
    const sc = c.serviceCenter;
    const ag = c.agentSupport || {};
    const scText = buildServiceText(sc);
    const claimsPhone = c.claims && c.claims.phone ? c.claims.phone : (c.claims && c.claims.note ? c.claims.note : '');
    const agentPhone = ag.phone || '';

    return `
      <div class="carrier-card" onclick="openCarrierModal(${idx})" role="button" tabindex="0"
           onkeydown="if(event.key==='Enter')openCarrierModal(${idx})">
        <div class="card-top">
          ${avatarHtml(c.name, false)}
          <div class="card-title">
            <div class="card-name">${escHtml(c.name)}</div>
            ${c.hours ? `<div style="font-size:11px;color:#9aaac8;margin-top:2px">${escHtml(c.hours)}</div>` : ''}
          </div>
        </div>

        ${sc ? `
        <div class="card-service">
          <span class="service-badge">Service Center</span>
          <div>
            <span class="service-val">${makeLink(scText)}</span>
            <div style="margin-top:4px">${serviceBadges(sc)}</div>
          </div>
        </div>` : ''}

        <div class="card-body">
          ${agentPhone ? `<div class="card-row"><span class="card-row-label">Agent Support</span><span class="card-row-val">${makeLink(agentPhone)}</span></div>` : ''}
          ${ag.chat ? `<div class="card-row"><span class="card-row-label"></span><span class="card-row-val"><span class="info-badge chat-badge">💬 Chat available</span></span></div>` : ''}
          ${claimsPhone ? `<div class="card-row"><span class="card-row-label">Claims</span><span class="card-row-val">${makeLink(claimsPhone)}</span></div>` : ''}
          ${c.changeRequest ? `<div class="card-row"><span class="card-row-label">Service Request</span><span class="card-row-val">${makeLink(c.changeRequest)}</span></div>` : ''}
        </div>

        <div class="card-footer">Click for full details →</div>
      </div>
    `;
  }).join('');
}

// ===== MODAL =====

const FIELD_ICONS = {
  'Phone':  '📞',
  'Email':  '✉️',
  'Name':   '👤',
  'Chat':   '💬',
  'Note':   '📝',
  'Hours':  '🕐',
  'Fax':    '📠',
};

function modalSection(title, badgeClass, fields) {
  const rows = fields.filter(([,v]) => v).map(([label, val]) => {
    const icon = FIELD_ICONS[label] || '•';
    // Split pipe-separated values into separate rows
    const values = val.split('|').map(v => v.trim()).filter(Boolean);
    return values.map(v =>
      `<div class="modal-field">
         <span class="modal-field-icon">${icon}</span>
         <span class="modal-field-val">${makeLink(v)}</span>
       </div>`
    ).join('');
  }).join('');
  if (!rows) return '';
  return `
    <div class="modal-section">
      <div class="${badgeClass}">${escHtml(title)}</div>
      ${rows}
    </div>
  `;
}

function openCarrierModal(idx) {
  const c = window.CARRIERS[idx];
  const sc = c.serviceCenter || null;
  const ag = c.agentSupport || {};
  const uw = c.uw || {};
  const cl = c.claims || {};
  const [bg, fg] = avatarColor(c.name);

  let html = `
    <div class="modal-header">
      ${avatarHtml(c.name, true)}
      <div>
        <div class="modal-carrier-name">${escHtml(c.name)}</div>
        ${c.hours ? `<div class="modal-hours-tag">Agent hours: ${escHtml(c.hours)}</div>` : ''}
      </div>
    </div>
  `;

  // Customer Service Center — only if carrier has one
  if (sc && (sc.phone || sc.email)) {
    const scRows = [
      sc.phone ? sc.phone.split('|').map(p => `<div class="modal-field"><span class="modal-field-icon">📞</span><span class="modal-field-val">${makeLink(p.trim())}</span></div>`).join('') : '',
      sc.email ? sc.email.split('|').map(e => `<div class="modal-field"><span class="modal-field-icon">✉️</span><span class="modal-field-val">${makeLink(e.trim())}</span></div>`).join('') : '',
      sc.hours ? `<div class="modal-field"><span class="modal-field-icon">🕐</span><span class="modal-field-val">${escHtml(sc.hours)}</span></div>` : '',
    ].join('');
    html += `
      <div class="modal-service-section">
        <div class="modal-service-title">Service Center</div>
        ${scRows}
        ${(sc.chat || sc.spanish) ? `<div style="margin-top:8px">${serviceBadges(sc)}</div>` : ''}
      </div>
    `;
  }

  html += '<div class="modal-sections">';

  // 1. Agent Support
  html += modalSection('Agent Support', 'uw-badge', [
    ['Phone', ag.phone],
    ['Name', ag.name],
    ['Email', ag.email],
    ['Chat', ag.chat ? 'Chat available' : null],
    ['Note', ag.note],
  ]);

  // 2. Underwriting
  html += modalSection('Underwriting', 'uw-badge', [
    ['Name', uw.name],
    ['Phone', uw.phone],
    ['Email', uw.email],
    ['Note', uw.note],
  ]);

  // 3. Service Requests
  if (c.changeRequest) {
    html += `
      <div class="modal-section">
        <div class="uw-badge">Service Requests</div>
        <div class="modal-field">
          <span class="modal-field-val">${makeLink(c.changeRequest)}</span>
        </div>
      </div>
    `;
  }

  // 4. Claims
  html += modalSection('Claims', 'claims-badge', [
    ['Phone', cl.phone],
    ['Email', cl.email],
    ['Note', cl.note],
  ]);

  // 5. Notes (service center note goes here)
  if (sc && sc.note) {
    html += `
      <div class="modal-section">
        <div class="modal-section-title">Notes</div>
        <div class="modal-field"><span class="modal-field-val">${makeLink(sc.note)}</span></div>
      </div>
    `;
  }

  html += '</div>';

  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('modalClose').focus();
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== SEARCH =====

// ===== CARRIER SEARCH HELPER =====

function carrierMatchesQuery(c, q) {
  const blob = [
    c.name,
    c.serviceCenter && [c.serviceCenter.phone, c.serviceCenter.email, c.serviceCenter.note].join(' '),
    c.agentSupport && [c.agentSupport.phone, c.agentSupport.email, c.agentSupport.name, c.agentSupport.note].join(' '),
    c.uw && [c.uw.email, c.uw.note, c.uw.phone, c.uw.name].join(' '),
    c.claims && [c.claims.phone, c.claims.email].join(' '),
    c.changeRequest,
    c.hours,
  ].filter(Boolean).join(' ').toLowerCase();
  return blob.includes(q);
}

// ===== AGENTS =====

function renderAgents(list, gridId) {
  const grid = document.getElementById(gridId || 'agentGrid');
  if (!grid) return;
  grid.innerHTML = list.map(a => {
    const [bg, fg] = avatarColor(a.name);
    return `
      <div class="agent-card">
        <div class="agent-avatar" style="background:${bg};color:${fg}">${initials(a.name)}</div>
        <div>
          <div class="agent-name">${escHtml(a.name)}</div>
          ${a.agency ? `<div class="agent-agency">${escHtml(a.agency)}</div>` : '<div class="agent-agency">&nbsp;</div>'}
          <div class="agent-detail">
            ${a.phone ? `<span>📞 ${escHtml(a.phone)}</span><br>` : ''}
            ${a.email ? `<span>✉️ <a href="mailto:${escHtml(a.email)}">${escHtml(a.email)}</a></span>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ===== GLOBAL SEARCH =====

function globalSearch(q) {
  const allSections = document.querySelectorAll('.tab-section');
  const searchSection = document.getElementById('tab-search');
  const tabs = document.querySelectorAll('.tab-btn');

  if (!q) {
    // Restore normal tabs
    searchSection.style.display = 'none';
    document.getElementById('tab-carriers').classList.add('active');
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === 'carriers'));
    return;
  }

  // Show search results section, hide others
  allSections.forEach(s => { s.classList.remove('active'); s.style.display = 'none'; });
  searchSection.style.display = 'block';
  tabs.forEach(t => t.classList.remove('active'));

  // --- Carriers ---
  const matchedCarriers = window.CARRIERS.filter(c => carrierMatchesQuery(c, q));
  const carriersWrap = document.getElementById('searchCarriersWrap');
  if (matchedCarriers.length > 0) {
    carriersWrap.style.display = 'block';
    renderCarrierCards(matchedCarriers, 'searchCarrierGrid');
  } else {
    carriersWrap.style.display = 'none';
  }

  // --- Internal ---
  const allRows = document.querySelectorAll('#tab-internal .info-row');
  const matchedRows = [];
  allRows.forEach(r => {
    if (r.textContent.toLowerCase().includes(q)) matchedRows.push(r);
  });
  const internalWrap = document.getElementById('searchInternalWrap');
  const internalResults = document.getElementById('searchInternalResults');
  if (matchedRows.length > 0) {
    internalWrap.style.display = 'block';
    internalResults.innerHTML = matchedRows.map(r => r.outerHTML).join('');
  } else {
    internalWrap.style.display = 'none';
  }

  // --- Agents ---
  const matchedAgents = window.AGENTS.filter(a =>
    [a.name, a.agency, a.email, a.phone].join(' ').toLowerCase().includes(q)
  );
  const agentsWrap = document.getElementById('searchAgentsWrap');
  if (matchedAgents.length > 0) {
    agentsWrap.style.display = 'block';
    renderAgents(matchedAgents, 'searchAgentGrid');
  } else {
    agentsWrap.style.display = 'none';
  }

  // --- Count & no results ---
  const total = matchedCarriers.length + matchedRows.length + matchedAgents.length;
  document.getElementById('globalCount').textContent =
    total + ' result' + (total === 1 ? '' : 's') + ' for "' + q + '"';
  document.getElementById('globalNoResults').style.display = total === 0 ? 'block' : 'none';
}

document.getElementById('globalSearch').addEventListener('input', function() {
  globalSearch(this.value.toLowerCase().trim());
});

// ===== TABS =====

document.getElementById('mainNav').addEventListener('click', e => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;
  // Clear search when switching tabs
  document.getElementById('globalSearch').value = '';
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-section').forEach(s => { s.classList.remove('active'); s.style.display = 'none'; });
  document.getElementById('tab-search').style.display = 'none';
  btn.classList.add('active');
  const target = document.getElementById('tab-' + btn.dataset.tab);
  target.style.display = 'block';
  target.classList.add('active');
});

// ===== INIT =====
renderCarrierCards(window.CARRIERS);
renderAgents(window.AGENTS, 'agentGrid');

