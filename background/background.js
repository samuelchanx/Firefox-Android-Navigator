browser.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
  console.log('onMessage: background')
  const currentTab = (await browser.tabs.query({ currentWindow: true, active: true }))[0]
  const tabs = await browser.tabs.query({})
  let currentTabPosition = 0
  tabs.find((tab, index) => {
    if (tab.id === currentTab.id) { currentTabPosition = index }
  })
  
  const nextTab = tabs[currentTabPosition + 1]
  const previousTab = tabs[currentTabPosition - 1]

  // Remove current tab
  await browser.tabs.remove(currentTab.id)

  // Navigate to next tab
  if (nextTab) await browser.tabs.update(nextTab.id, { active: true })
})
