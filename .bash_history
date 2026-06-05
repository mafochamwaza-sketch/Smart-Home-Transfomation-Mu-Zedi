python3 -m agent_browser.main --action navigate --url "http://localhost:3000" --screenshot
npm run dev -- --port 3000 --host
sudo -i -u agent-lead bash -c "cd /home/agent-lead && npm run preview -- --port 3005 --host"
agent-browser open http://localhost:3005 && agent-browser screenshot
agent-browser open http://localhost:3005 && agent-browser screenshot --full
npm create vite@latest . -- --template react
npm init -y
npm install react react-dom
npm install -D vite @vitejs/plugin-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install
npm run build
sudo -i -u agent-lead
npm run dev -- --port 3000 --host
sudo -i -u agent-lead bash -c "cd /home/agent-lead && npm run preview -- --port 3008 --host"
sudo -i -u agent-lead bash -c "cd /home/agent-lead && npm run build && npm run preview -- --port 3000 --host"
env | grep -i URL
npm install -g localtunnel
