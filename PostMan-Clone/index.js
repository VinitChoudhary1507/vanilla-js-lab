const template = document.querySelector("[data-request-key-value]");
const paramsDiv = document.querySelector("[data-request-params-div]");
const headerDiv = document.querySelector("[data-request-header-div]");
const addQueryHeaderBtn = document.querySelector("[data-request-query-header]");
const addQueryParamBtn = document.querySelector("[data-request-query-params]");
const formSubmit = document.querySelector("[data-form-submit]");
const selectRequest = document.querySelector("#exampleFormControlSelect1");

formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const urlInput = document.querySelector("#urlInput");
    const method = selectRequest.value;
    const headers = getKeyValuePair(headerDiv);
    urlValue = urlInput.value;
    const params = getKeyValuePair(paramsDiv);
    if (!urlValue) {
        alert("🚫 Please enter a valid URL..");
        return;
    }
    const config = {
        method: method,
        url: urlValue,
        headers: headers,
        params: params,
    };

axios(config)
    .then(function (response) {
        document
        .querySelector("[data-response-selection]").classList.remove("d-none");
        updateResponseDetail(response);
    })
    .catch(function (error) {
     let response;
      if (error.response) {
        console.error("❌ Error:", error);
            document
            .querySelector("[data-response-selection]")
            .classList.remove("d-none");
        // You can show status or error message here
            updateResponseDetail(
                error.response || { status: "Error: No Response" }
            );
            response = error.response;
            } else {
                // Create a mock response with default values
                response = {
                    status: error.message || "Error: No Response",
                    data: {},
                    customData: { time: 0 }, // Default time if unavailable
                };
            }
        });
});

axios.interceptors.request.use((request) => {
    request.customData = request.customData || {};
    request.customData.startTime = new Date().getTime();
    return request;
    console.log(request.customData.startTime);
});

function updateEndTime(response) {
    response.customData = response.customData || {};
    response.customData.time =
        new Date().getTime() - response.config.customData.startTime;
    console.log("endtime", new Date().getTime());
    console.log(
        "response.config.customData.startTime",
        response.config.customData.startTime
    );
    console.log("subtract", response.customData.time);
    return response;
}

axios.interceptors.response.use(updateEndTime, (e) => {
    return Promise.reject(updateEndTime(e.response));
});
function updateResponseDetail(response) {
    document.querySelector("[data-status]").innerHTML = response.status;
    document.querySelector("[data-time]").innerHTML = response.customData.time;

    if (response.data) {
        const responseSize = JSON.stringify(response.data).length;
        const readableSize = prettyBytes(responseSize);
        document.querySelector("[data-size]").textContent = readableSize;
    } else {
        document.querySelector("[data-size]").textContent = "N/A";
    }
}
function getKeyValuePair(container) {
    const data = {};
    const inputGroup = container.querySelectorAll(".input-group");

    inputGroup.forEach((element) => {
        const key = element.querySelector("[data-key]").value;
        const value = element.querySelector("[data-value]").value;
        if (key) data[key] = value;
    });

    return data;
}
function createKeyValueGroup() {
    const clone = template.content.cloneNode(true);
    const removeBtn = clone.querySelector("button");

    // Add event to remove the parent div when the button is clicked
    removeBtn.addEventListener("click", (e) => {
        e.target.closest(".input-group").remove();
    });

    return clone;
}

// Initial elements appended
paramsDiv.appendChild(createKeyValueGroup());
headerDiv.appendChild(createKeyValueGroup());

// Add new query param field
addQueryParamBtn.addEventListener("click", () => {
    paramsDiv.appendChild(createKeyValueGroup());
});

// Add new header field
addQueryHeaderBtn.addEventListener("click", () => {
    headerDiv.appendChild(createKeyValueGroup());
});
