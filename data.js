// ============================================================
// POLLY CONTACT DIRECTORY — DATA
// ============================================================

window.CARRIERS = [
  {
    name: "AAA",
    serviceCenter: null,
    agentSupport: { phone: "866-883-1261", email: "agentserviceteam@csaa.com", chat: true },
    uw: {},
    claims: { phone: "888-222-0086" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 5am–9pm, Sat 5am–7pm"
  },
  {
    name: "Allstate",
    serviceCenter: null,
    agentSupport: { phone: "800-336-9400", chat: true, note: "Chat preferred" },
    uw: {},
    claims: { phone: "877-810-2920" },
    changeRequest: "Must endorse in carrier site",
    hours: "M–F 9am–7pm EST, Sat 10am–2pm EST"
  },
  {
    name: "American Integrity",
    serviceCenter: null,
    agentSupport: { phone: "866-968-8390" },
    uw: {},
    claims: { phone: "866-277-9871" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: ""
  },
  {
    name: "American Modern",
    serviceCenter: null,
    agentSupport: { phone: "800-543-2644", note: "For OLD American Modern policies (pre-2020) only. All other policies should be serviced through Johnson & Johnson. Must call to service." },
    uw: {},
    claims: {},
    changeRequest: "Must call Agent Support to service",
    hours: ""
  },
  {
    name: "Annex Risk",
    serviceCenter: null,
    agentSupport: { phone: "415-209-5469", email: "support@annexrisk.com" },
    uw: {},
    claims: { phone: "415-209-5469", email: "support@annexrisk.com" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–Th 9am–4:30pm EST, Fri 6am–1:30pm EST"
  },
  {
    name: "Arbella",
    serviceCenter: null,
    agentSupport: { phone: "800-272-3552" },
    uw: { name: "Brittany Stetson", phone: "617-793-9041 x2840", email: "Brittany.Stetson@arbella.com" },
    claims: { phone: "1-800-272-3552" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–5pm EST"
  },
  {
    name: "ASI / Progressive Home",
    serviceCenter: null,
    agentSupport: { phone: "866-274-8765", email: "agencyservices@asicorp.org" },
    uw: { email: "[state]underwriting@email.progressive.com (Underwriting) | [state]inspections@email.progressive.com (Inspections) | pgrh_umbrella@email.progressive.com (Umbrella) | PGRH_floodunderwriting@progressive.com (Flood)", note: "Prepend state abbreviation to email address (e.g. VTunderwriting@...)" },
    claims: { phone: "866-274-5677" },
    changeRequest: "[state]endorsements@email.progressive.com for HO3/HO4/HO6/DP3 changes",
    hours: "M–F 8am–9pm EST"
  },
  {
    name: "Branch",
    serviceCenter: null,
    agentSupport: { phone: "855-438-5411", email: "agencysupport@ourbranch.com", chat: true, note: "Chat preferred" },
    uw: {},
    claims: { note: "Direct customer to mobile app or file online" },
    changeRequest: "Must endorse in carrier site or call/chat Agent Support",
    hours: "M–F 9am–7pm ET"
  },
  {
    name: "Bristol West",
    serviceCenter: { phone: "888-888-0080", note: "Billing ONLY" },
    agentSupport: { phone: "855-319-7763 | Billing only: 888-888-0080", email: "contact@bristolwest.com", chat: true, note: "Fax: 888-888-0070" },
    uw: {},
    claims: { phone: "1-800-274-7865" },
    changeRequest: "Must endorse in carrier site or call/chat Agent Support",
    hours: "M–F 8am–6pm EST, Sat open (limited)"
  },
  {
    name: "Chubb",
    serviceCenter: null,
    agentSupport: { phone: "800-777-2131", email: "customercenter@chubb.com" },
    uw: { phone: "908-572-3837", email: "UWSupport@chubb.com" },
    claims: { phone: "800-777-2131" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–8pm EST"
  },
  {
    name: "Cincinnati",
    serviceCenter: null,
    agentSupport: { phone: "513-870-2882", email: "PLClientServices@cinfin.com", chat: true, note: "Billing: 513-870-2002" },
    uw: { name: "Aryssa Lane", phone: "513-371-7857 x7857", email: "Aryssa_Lane@cinfin.com" },
    claims: { phone: "877-242-2544" },
    changeRequest: "Must endorse in carrier site or call/chat Agent Support",
    hours: "M–F 8am–5pm EST"
  },
  {
    name: "Citizens (FL)",
    serviceCenter: null,
    agentSupport: { phone: "888-685-1555" },
    uw: {},
    claims: { phone: "866-411-2742" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–5pm EST"
  },
  {
    name: "Colonial Group (Surplus Lines)",
    serviceCenter: null,
    agentSupport: { phone: "800-628-3762", email: "customerservice@thecolonialgroup.com" },
    uw: { email: "underwriting@thecolonialgroup.com | submissions@thecolonialgroup.com", note: "Submissions: submissions@thecolonialgroup.com" },
    claims: {},
    changeRequest: "Endorsements: endorsements@thecolonialgroup.com | Cancellations: cancellations@thecolonialgroup.com",
    hours: "M–F 8am–5pm EST"
  },
  {
    name: "Concord",
    serviceCenter: null,
    agentSupport: { phone: "800-852-3380" },
    uw: { name: "Reba Mistretta", phone: "800-852-3380 x6296", email: "rmistretta@concordgroupins.com" },
    claims: { phone: "ME: 800-482-7443 | MA: 800-422-5246 | NH: 800-888-6050 | VT: 800-660-3838" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–5pm EST"
  },
  {
    name: "Countryway",
    serviceCenter: null,
    agentSupport: { phone: "877-367-6572", email: "billing@countryway.com", note: "Billing email" },
    uw: { email: "KY: Patrick Izac 315-634-5275 pizac@countryway.com | ME: Dennis Jeter 315-634-5288 djeter@countryway.com | NY: Joni Murphy 877-367-6572 x45264 jmurphy@countryway.com | PA: Justin Dorr 315-634-5257 jdorr@countryway.com | New biz quotes: quotes@countryway.com" },
    claims: { phone: "Report: 888-223-3649 | Claims Dept: 800-828-6862" },
    changeRequest: "Cancellations must be processed by Countryway — send signed LPR to underwriting@countryway.com",
    hours: "M–F 8am–4:30pm EST"
  },
  {
    name: "Dairyland",
    serviceCenter: null,
    agentSupport: { phone: "800-334-0090" },
    uw: { email: "PLPCDocuments@sentry.com" },
    claims: { phone: "800-334-0090" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M-F 6am - 9:9m CT"
  },
  {
    name: "Encompass",
    serviceCenter: { phone: "866-334-7524" },
    agentSupport: { phone: "800-262-9262" },
    uw: {},
    claims: { phone: "800-588-7400" },
    changeRequest: "service@encompassins.com",
    hours: ""
  },
  {
    name: "Foremost Signature",
    serviceCenter: { phone: "800-422-4272", spanish: true },
    agentSupport: { phone: "800-255-0332 opt. 3\n866-539-1315 (MA)", chat: true },
    uw: { email: "policyupdate@foremost.com"},
    claims: { phone: "800-854-6011" },
    changeRequest: "policyupdate@foremost.com \n EFT: upload to Agent360 or email/fax 866-743-4891. \n RCC forms: mail or fax 866-421-0076.",
    hours: "M–F 8am–8pm EST"
  },
  {
    name: "Foremost STAR",
    serviceCenter: null,
    agentSupport: { phone: "800-527-3905", chat: true, note: "Chat Now preferred" },
    uw: { email: "sduw@foremost.com (specialty dwelling) \n pluw@foremost.com (Mobile Home) \n rvuw@foremost.com \n imaging@foremost.com"},
    claims: { phone: "800-435-7764" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–8pm EST"
  },
  {
    name: "Gainsco",
    serviceCenter: null,
    agentSupport: { phone: "866-424-6726" },
    uw: {},
    claims: { phone: "800-424-6726" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–6pm CST"
  },
  {
    name: "GeoVera",
    serviceCenter: null,
    agentSupport: { phone: "706-863-3777", email: "agentsupport@geovera.com" },
    uw: {},
    claims: {},
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M-F 9am-8pm EST",
  },
  {
    name: "Good2Go",
    serviceCenter: { phone: "888-303-3430", spanish: true},
    agentSupport: { phone: "888-303-3430", email: "customerservice@good2go.co" },
    uw: {},
    claims: { phone: "800-727-6664" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–7:30pm EST, Sat 9am–5pm EST"
  },
  {
    name: "Grange",
    serviceCenter: null,
    agentSupport: { phone: "855-758-9735", email: "AskPersonalLines@grangeinsurance.com", chat: true },
    uw: {},
    claims: { phone: "Report: 800-445-3030 | Track: 800-686-0025" },
    changeRequest: "Must endorse in ca. Email plmail@grangeinsurance.com for backdated changes only.",
    hours: "M–F 8am–7pm, Sat 9am–noon"
  },
  {
    name: "Hagerty",
    serviceCenter: null,
    agentSupport: { phone: "800-747-5348", chat: true, fax: "231-941-8227" },
    uw: { email: "auto@hagerty.com" },
    claims: { phone: "800-385-0274", email: "claims@hagerty.com" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M-F 8am-8pm EST, Sat 8:30am to 4:30pm EST"
  },
  {
    name: "Hanover",
    serviceCenter: null,
    agentSupport: { phone: "800-853-7537" },
    uw: { email: "MA: worplrmv@hanover.com | All other states: hanpersline@hanover.com" },
    claims: { phone: "800-628-0250" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–6pm EST"
  },
  {
    name: "Hartford",
    serviceCenter: null,
    agentSupport: { phone: "Advantage: 800-771-8557 | Prevail: 877-859-5888", email: "piagencyservice@thehartford.com" },
    uw: { note: "See carrier resource for UW email" },
    claims: { phone: "800-243-5860" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–8pm EST"
  },
  {
    name: "Heritage",
    serviceCenter: null,
    agentSupport: { phone: "855-536-2744" },
    uw: {},
    claims: { phone: "855-415-7120" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 9am–8pm EST"
  },
  {
    name: "Johnson & Johnson",
    serviceCenter: null,
    agentSupport: { phone: "800-487-7565 x5021 (quotes/new biz) | x5029 (binders)", email: "quotes@jjins.com | plbinders@jjins.com" },
    uw: { email: "mail@jjins.com" },
    claims: { phone: "800-487-7565", email: "claims@jjins.com" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: ""
  },
  {
    name: "Kemper",
    serviceCenter: null,
    agentSupport: { phone: "800-264-7516", chat: true, email: "customer.service@ipacc.com" },
    uw: {},
    claims: { phone: "800-334-1661" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–7pm CT, Sat 11am–6pm CT"
  },
  {
    name: "Kemper Infinity",
    serviceCenter: null,
    agentSupport: { phone: "800-782-1020", email: "customer.service@ipacc.com", chat: true },
    uw: {},
    claims: { phone: "800-334-1661" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–7pm CT, Sat 11am–6pm CT"
  },
  {
    name: "Kemper Preferred (Old Kemper)",
    serviceCenter: null,
    agentSupport: { phone: "866-675-3345" },
    uw: {},
    claims: { phone: "866-675-3345" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–7pm CT, Sat 11am–6pm CT"
  },
  {
    name: "Lemonade",
    serviceCenter: null,
    agentSupport: { email: "agents@lemonade.com", chat: true, note: "Chat preferred" },
    uw: {},
    claims: { note: "Direct customer to mobile app" },
    changeRequest: "Customers can process changes in app. Agents can process some changes in carrier site.",
    hours: "7 days/week 8am–8pm ET"
  },
  {
    name: "Liberty Mutual (Safeco)",
    serviceCenter: { phone: "866-472-3326", spanish: true },
    agentSupport: { phone: "866-272-3326", chat: true, note: "Click to Chat or call | Pet only: 844-416-1926" },
    uw: { email: "documents@safeco.com | pause@safeco.com | Policy docs:'IAdocuments@libertymutual.com' | Proof docs: pause@safeco.com" },
    claims: { phone: "800-332-3226" },
    changeRequest: "Email policy docs to documents@safeco.com",
    hours: "24 Hours, 7 days/week"
  },
  {
    name: "Loggerhead",
    serviceCenter: null,
    agentSupport: { phone: "855-216-2565", email: "agency.support@loggerhead.insurance" },
    uw: { email: "underwriting@loggerhead.insurance" },
    claims: { phone: "855-216-9428" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–5pm ET"
  },
  {
    name: "Main Street America (MSA)",
    serviceCenter: { phone: "866-496-0779", hours: "M–F 8am–8pm EST" },
    agentSupport: { phone: "877-927-5672", email: "customer@msagroup.com | EFT: Billingservices@msagroup.com", note: "MA, NY, PA serviced in house" },
    uw: { name: "New England: John Penc 603-358-1601 pencj@msagroup.com | NY & PA: Katie Hansen 315-434-1575 hansenk@msagroup.com | UW requests: msaplunderwriting@msagroup.com" },
    claims: { phone: "877-425-2467" },
    changeRequest: "MA/NY/PA: msaplprocessing@msagroup.com | All other states: plservicecenter@msagroup.com",
    hours: "M–F 8am–8pm EST"
  },
  {
    name: "Maine Mutual Group (MMG)",
    serviceCenter: null,
    agentSupport: { phone: "877-735-8339" },
    uw: { name: "Barbara Sinclair", phone: "877-728-2796", email: "barbara.sinclair@mmgins.com" },
    claims: { phone: "800-343-0533 \n Glass Claims: 877-664-5277" },
    changeRequest: "endorsements@mmgins.com | 877-363-6773",
    hours: "M–F 8am–4:30pm EST"
  },
  {
    name: "Mapfre / Commerce",
    serviceCenter: { phone: "844-509-4652", hours: "M–F 8am–4:30pm EST" },
    agentSupport: { phone: "844-509-4652" },
    uw: { note: "Kathy Antrim: 844-627-3737 x14303 | Diana Manning: 800-562-4517 x22825 dmanning@mapfreusa.com" },
    claims: { phone: "1-844-627-3734" },
    changeRequest: "MA/NY/PA: service@mapfreusa.com | All other states: national@mapfreusa.com",
    hours: "M–F 8am–4:30pm EST"
  },
  {
    name: "Mercury",
    serviceCenter: null,
    agentSupport: { phone: "877-707-7987" },
    uw: { email: "ppauw@mercuryinsurance.com" },
    claims: { phone: "800-503-3724" },
    changeRequest: "Must endorse in carrier site",
    hours: "M–F 8am–6pm PST"
  },
  {
    name: "National General",
    serviceCenter: { phone: "877-468-3466", hours: "M–F 9am–6pm EST" },
    agentSupport: { phone: "877-468-3466" },
    uw: {},
    claims: { phone: "1-800-468-3466" },
    changeRequest: "Email service@ngic.com",
    hours: "M–F 9am–6pm EST"
  },
  {
    name: "Nationwide",
    serviceCenter: null,
    agentSupport: { phone: "800-209-3288 x6", chat: true },
    uw: { email: "plundad@nationwide.com | plpc@nationwide.com" },
    claims: { phone: "800-421-3535" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: ""
  },
  {
    name: "New England Excess Exchange",
    serviceCenter: null,
    agentSupport: { phone: "800-548-4301", email: "info@neee.com" },
    uw: {},
    claims: {},
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: ""
  },
  {
    name: "NYCM",
    serviceCenter: null,
    agentSupport: { phone: "800-234-6926", email: "interfacesupport@nycm.com", note: "Agency Tech Support: 800-234-6926 x2738" },
    uw: {},
    claims: { phone: "800-234-6926" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 9am–5pm EST"
  },
  {
    name: "Ohio Mutual",
    serviceCenter: null,
    agentSupport: { name: "Carol Beagle", phone: "800-686-3011 x0974", email: "cbeagle@omig.com", chat: true },
    uw: {},
    claims: { phone: "888-895-7725" },
    changeRequest: "Cannot cancel ourselves — send signed LPR to plchanges@omig.com. Use chat if unable to process a change.",
    hours: "M–F 8am–5pm EST"
  },
  {
    name: "Openly",
    serviceCenter: null,
    agentSupport: { phone: "857-990-9080", chat: true},
    uw: {},
    claims: { phone: "888-808-4842" },
    changeRequest: "Submit service request at openly.com/service",
    hours: "M–F 9am–8pm EST"
  },
  {
    name: "Patriot",
    serviceCenter: null,
    agentSupport: { phone: "866-460-1776", email: "pl.email@fmins.com" },
    uw: {},
    claims: { phone: "866-460-1776" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: ""
  },
  {
    name: "Personal Umbrella",
    serviceCenter: null,
    agentSupport: { phone: "800-564-1799", note: "Tech Support: opt. 7 | FL quotes: Mary Nyquist x3311 mnyquist@mymga.com" },
    uw: {},
    claims: {},
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 7:30am–5pm PST"
  },
  {
    name: "Plymouth Rock",
    serviceCenter: { phone: "800-437-5556", note: "NJ & PA ONLY" },
    agentSupport: { phone: "Auto/Umbrella: 833-511-7625 | Home: 844-208-1935", note: "908-790-7800 opt. 5 | Home: Nick Bartlett 617-428-1945 nbartlett@plymouthrock.com", chat: true },
    uw: { phone: "908-790-7800 Opt 5" },
    claims: { phone: "Auto: 833-511-7625 | Home: 844-346-1225" },
    changeRequest: "Auto: policychanges@plymouthrock.com | Home: homeprocessing@plymouthrock.com",
    hours: "M–F 8am–5pm EST"
  },
  {
    name: "Preferred Mutual",
    serviceCenter: null,
    agentSupport: { email: "customerservice@preferredmutual.com", note: "Billing, coverages, payment questions" },
    uw: {},
    claims: { phone: "800-333-7642" },
    changeRequest: "Policy changes: pcr1@preferredmutual.com",
    hours: ""
  },
  {
    name: "Progressive",
    serviceCenter: { phone: "800-776-4737", spanish: true },
    agentSupport: { phone: "877-776-2436", note: "CA Drive: 800-300-3693 | Snapshot: 877-329-7283 | Tech Support: 800-695-4050 | VPB Fax: 800-950-5666" },
    uw: { note: "Docs (non-CA): upload@progressiveagent.com\nPre-binding: verification@progressive.com\nCalifornia (Drive): proof@driveinsurance.com\nRoadside: progressiveroadside.com"
    },
    claims: { phone: "800-876-5581" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "24/7"
  },

  {
    name: "Providence Mutual",
    serviceCenter: null,
    agentSupport: { phone: "877-763-1800", email: "UWFAX@providencemutual.com" },
    uw: { email: "UWFAX@providencemutual.com" },
    claims: {},
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: ""
  },
  {
    name: "PURE",
    serviceCenter: null,
    agentSupport: { phone: "888-813-7873", email: "quote@pureinsurance.com", note: "New biz: Fatou Secka fsecka@pureinsurance.com | Existing: underwritingservices@pureinsurance.com" },
    uw: { note: "underwritingservices@pureinsurance.com" },
    claims: { phone: "888-813-7873" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 7am–9pm EST, Sat 8am–8pm EST"
  },
  {
    name: "S-H Underwriters",
    serviceCenter: null,
    agentSupport: { phone: "888-731-5116", note: "Fax: 802-229-5669" },
    uw: {},
    claims: { email: "claims@sh-underwriters.com", note: "Agency use only" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: ""
  },
  {
    name: "Selective",
    serviceCenter: { phone: "866-513-4395", hours: "See agent support hours" },
    agentSupport: { phone: "866-861-3239", email: "clientservicecenter@selective.com" },
    uw: {},
    claims: { phone: "866-455-9969" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: ""
  },
  {
    name: "Slide",
    serviceCenter: { phone: "800-748-2030", hours: "M–F 8am–5pm EST" },
    agentSupport: { phone: "800-598-8422", email: "policyservices@slideinsurance.com" },
    uw: {},
    claims: { phone: "866-230-3758", email: "claims@slideinsurance.com" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–5pm EST"
  },
  {
    name: "StateAuto",
    serviceCenter: null,
    agentSupport: { phone: "833-724-3577", email: "PLUnderwriting@stateauto.com" },
    uw: { email: "PLUnderwriting@stateauto.com" },
    claims: { phone: "877-722-5246" },
    changeRequest: "Email SAservice@stateauto.com",
    hours: ""
  },
  {
    name: "Stillwater",
    serviceCenter: null,
    agentSupport: { phone: "800-849-6140" },
    uw: { email: "Auto: auto@stillwater.com | Home: underwriting@stillwater.com" },
    claims: { phone: "800-220-1351" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–9pm ET, Sat 8am–3pm ET"
  },
  {
    name: "The General",
    serviceCenter: null,
    agentSupport: { phone: "877-222-4586", email: "underwriting@thegeneral.com" },
    uw: { email: "underwriting@thegeneral.com" },
    claims: { phone: "877-222-4586" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–7pm CST, Sat 8am–4pm CST"
  },
  {
    name: "Travelers",
    serviceCenter: { phone: "866-933-7287", spanish: true },
    agentSupport: { phone: "877-878-2468", note: "All states except MA: Stella Williams x3252 | MA: Tracy Hayes x4860 uwthayes@travelers.com" },
    uw: { phone: "877-878-2468", name: "Stella Williams x3252 (all states except MA) | Tracy Hayes x4860 uwthayes@travelers.com (MA)", email: "piuwgfbc@travelers.com | uwinfo@travelers.com" },
    claims: { phone: "800-252-4633" },
    changeRequest: "Process in carrier site when possible | Piservice@travelers.com"
  },
  {
    name: "Union Mutual",
    serviceCenter: null,
    agentSupport: { phone: "800-300-5261, Billing ext. 721, Help Desk ext. 723" },
    uw: { name: "Hilary Lafond", phone: "800-300-5261 x598", email: "hlafond@unionmutual.com | unionexpress@unionmutual.com" },
    claims: { phone: "888-299-0354" },
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–Th 8am–4:30pm EST, Fri 8am–3pm EST"
  },
  {
    name: "Utica National",
    serviceCenter: null,
    agentSupport: { phone: "800-598-8422", chat: true, note: "Fax: 800-556-8625" },
    uw: { name: "Daniel Backes", phone: "315-734-2071", email: "daniel.backes@uticanational.com", note: "General UW: webpld@uticanational.com" },
    claims: {phone: "800-456-4556"},
    changeRequest: "Must endorse in carrier site or contact Agent Support",
    hours: "M–F 8am–5pm EST"
  },
  {
    name: "Vermont Mutual",
    serviceCenter: null,
    agentSupport: { name: "Jordan Streeter", phone: "802-223-2341 x7615", email: "jstreeter@vermontmutual.com", note: "Documents: PLUNDW@vermontmutual.com" },
    uw: { name: "Jordan Streeter", phone: "802-223-2341 x7615", email: "jstreeter@vermontmutual.com | Documents: PLUNDW@vermontmutual.com" },
    claims: { phone: "800-435-0397 | Glass Claims: 800-997-7709" },
    changeRequest: "Must endorse in carrier site",
    hours: "M–Th 7:45am–4:30pm EST, Fri 7:45am–3:15pm EST"
  }
];

window.AGENTS = [
  { name: "Ailyn Ravelo", agency: "", email: "aravelo@pollyagent.com", phone: "786-384-3949" },
  { name: "Alexandria Dellafera", agency: "Branch", email: "Alexandria.Dellafera@pollyagent.com", phone: "380-226-8128 x1187" },
  { name: "Agustin Maldonado", agency: "Branch", email: "auggie.maldonado@pollyagent.com", phone: "" },
  { name: "Austin Pegouske", agency: "Branch", email: "austin.pegouske@pollyagent.com", phone: "380-214-6779 x3003" },
  { name: "Carlos Pacheco", agency: "Branch", email: "carlos.pacheco@pollyagent.com", phone: "380-225-2634 x2092" },
  { name: "Ciera Wembley", agency: "Branch", email: "ciera.wembley@pollyagent.com", phone: "380-214-6629 x3001" },
  { name: "Debbie O'Connor", agency: "", email: "debbie.oconnor@pollyagent.com", phone: "860-237-5107" },
  { name: "Devon Bronk", agency: "Branch", email: "Devon.Bronk@pollyagent.com", phone: "380-226-8204 x1083" },
  { name: "Devyn Shay", agency: "Branch", email: "devyn.shay@pollyagent.com", phone: "" },
  { name: "Ian Prastien", agency: "LIL Insurance Agency", email: "ian.prastien@pollyagent.com", phone: "845-896-4700" },
  { name: "Jake Hurwitz", agency: "Black Bear Insurance", email: "insuranceblackbear@gmail.com", phone: "781-467-8777" },
  { name: "Jeff Dion", agency: "Vermont Trusted Insurance", email: "jeff.dion@pollyagent.com", phone: "802-662-0622" },
  { name: "Jennifer Perez", agency: "Branch", email: "jennifer.perez@pollyagent.com", phone: "704-426-0446" },
  { name: "Jyldyz Jakypova", agency: "Star Insurance Group", email: "jyldyz.jakypova@pollyagent.com", phone: "215-960-1310" },
  { name: "Kimberly Saldana", agency: "Branch", email: "kimberly.saldana@pollyagent.com", phone: "" },
  { name: "Kristi Wilson", agency: "Branch", email: "kristi.wilson@pollyagent.com", phone: "" },
  { name: "Mariah Azzouni", agency: "Branch", email: "Mariah.Azzouni@pollyagent.com", phone: "380-226-8306 x1061" },
  { name: "Mark Vesosky", agency: "MAV Insurance", email: "mark.vesosky@pollyagent.com", phone: "802-734-9197" },
  { name: "Michelle Moss", agency: "Branch", email: "michelle.moss@pollyagent.com", phone: "833-427-2624 x1164" },
  { name: "Mike Trimboli", agency: "", email: "mike.trimboli@pollyagent.com", phone: "203-585-3138" },
  { name: "Monica Broadie", agency: "Branch", email: "Monica.Broadie@pollyagent.com", phone: "380-226-8319 x2035" },
  { name: "Teri Barrow", agency: "Branch", email: "teri.barrow@pollyagent.com", phone: "833-327-2624 x1132" },
  { name: "Tristan (Tripp) Holm", agency: "Branch", email: "tripp.holm@pollyagent.com", phone: "" },
  { name: "Vanna Mosley", agency: "Branch", email: "Vanna.Mosley@pollyagent.com", phone: "207-690-7721 x1160" }
];
