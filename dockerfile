FROM hypriot/rpi-node
WORKDIR server
RUN npm set registry https://registry.npmjs.org/
COPY ./ .
RUN cd stellar && npm install -g babel-polyfill && npm install -g mocha && npm install -g babel-cli && npm install babel-plugin-transform-class-properties && npm install babel-plugin-transform-async-to-generator
RUN cd stellar && npm install && npm run build && npm link && cd ..
EXPOSE 8080
ENTRYPOINT ["stellar","run"]
